-- Portfolio Multi-Portfolio Database Migration
-- This script restructures the database to support multiple portfolios per user

USE Portfolio;

-- Step 1: Backup existing data
CREATE TABLE personalinfo_backup AS SELECT * FROM personalinfo;
CREATE TABLE projects_backup AS SELECT * FROM projects;
CREATE TABLE work_experince_backup AS SELECT * FROM work_experince;
CREATE TABLE skills_backup AS SELECT * FROM skills;

-- Step 2: Drop foreign key constraints
ALTER TABLE projects DROP FOREIGN KEY FK7xh210wu0o2awj9dw8m4src6x;
ALTER TABLE work_experince DROP FOREIGN KEY FKjf47efsxcorsldyorvciaj0rp;
ALTER TABLE skills DROP FOREIGN KEY FKp56u6c8y7p782ijwbxrwyu29p;

-- Step 3: Drop and recreate personalinfo with ID as primary key
DROP TABLE personalinfo;

CREATE TABLE personalinfo (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    portfolio_name VARCHAR(255) NOT NULL DEFAULT 'My Portfolio',
    fullname VARCHAR(255) NOT NULL,
    professionaltitle VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(255),
    location VARCHAR(255),
    personalwebsite VARCHAR(255),
    professionalbio VARCHAR(2000),
    githubprofile VARCHAR(255),
    linkedinprofile VARCHAR(255),
    portfolio_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email)
);

-- Step 4: Restore personal info data with new IDs
INSERT INTO personalinfo (email, fullname, professionaltitle, phonenumber, location, personalwebsite, professionalbio, githubprofile, linkedinprofile, portfolio_name)
SELECT email, fullname, professionaltitle, phonenumber, location, personalwebsite, professionalbio, githubprofile, linkedinprofile, 
       CONCAT(fullname, '''s Portfolio') as portfolio_name
FROM personalinfo_backup;

-- Step 5: Update projects to use personalinfo ID instead of email
ALTER TABLE projects ADD COLUMN personalinfo_id BIGINT AFTER id;

-- Map projects to personalinfo using email
UPDATE projects p
INNER JOIN personalinfo pi ON p.email = (SELECT email FROM personalinfo_backup WHERE email = pi.email LIMIT 1)
SET p.personalinfo_id = pi.id;

-- Step 6: Update work_experince to use personalinfo ID
ALTER TABLE work_experince ADD COLUMN personalinfo_id BIGINT AFTER id;

UPDATE work_experince w
INNER JOIN personalinfo pi ON w.email = (SELECT email FROM personalinfo_backup WHERE email = pi.email LIMIT 1)
SET w.personalinfo_id = pi.id;

-- Step 7: Update skills to use personalinfo ID
ALTER TABLE skills ADD COLUMN personalinfo_id BIGINT AFTER id;

UPDATE skills s
INNER JOIN personalinfo pi ON s.email = (SELECT email FROM personalinfo_backup WHERE email = pi.email LIMIT 1)
SET s.personalinfo_id = pi.id;

-- Step 8: Add foreign key constraints with personalinfo_id
ALTER TABLE projects 
ADD CONSTRAINT fk_projects_personalinfo 
FOREIGN KEY (personalinfo_id) REFERENCES personalinfo(id) ON DELETE CASCADE;

ALTER TABLE work_experince
ADD CONSTRAINT fk_work_exp_personalinfo 
FOREIGN KEY (personalinfo_id) REFERENCES personalinfo(id) ON DELETE CASCADE;

ALTER TABLE skills
ADD CONSTRAINT fk_skills_personalinfo 
FOREIGN KEY (personalinfo_id) REFERENCES personalinfo(id) ON DELETE CASCADE;

-- Verify data migration
SELECT 'Personal Info Count:' as info, COUNT(*) as count FROM personalinfo
UNION ALL
SELECT 'Projects Count:', COUNT(*) FROM projects
UNION ALL
SELECT 'Work Experience Count:', COUNT(*) FROM work_experince
UNION ALL
SELECT 'Skills Count:', COUNT(*) FROM skills;

SELECT 'Migration completed successfully!' as status;
