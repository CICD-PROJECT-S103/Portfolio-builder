-- Create Portfolio Table for managing multiple portfolios per user
CREATE TABLE IF NOT EXISTS portfolio (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_email VARCHAR(255) NOT NULL,
    portfolio_name VARCHAR(255) NOT NULL,
    template_type VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_email) REFERENCES customer(email) ON DELETE CASCADE,
    INDEX idx_user_email (user_email)
);

-- Modify existing tables to reference portfolio_id instead of just email
-- Add portfolio_id column to personalinfo
ALTER TABLE personalinfo 
ADD COLUMN portfolio_id BIGINT,
ADD FOREIGN KEY (portfolio_id) REFERENCES portfolio(id) ON DELETE CASCADE;

-- Add portfolio_id to projects
ALTER TABLE projects 
ADD COLUMN portfolio_id BIGINT,
ADD FOREIGN KEY (portfolio_id) REFERENCES portfolio(id) ON DELETE CASCADE;

-- Add portfolio_id to workexperince
ALTER TABLE workexperince 
ADD COLUMN portfolio_id BIGINT,
ADD FOREIGN KEY (portfolio_id) REFERENCES portfolio(id) ON DELETE CASCADE;

-- Add portfolio_id to techincalskills
ALTER TABLE techincalskills 
ADD COLUMN portfolio_id BIGINT,
ADD FOREIGN KEY (portfolio_id) REFERENCES portfolio(id) ON DELETE CASCADE;

-- Create index for better query performance
CREATE INDEX idx_portfolio_id ON personalinfo(portfolio_id);
CREATE INDEX idx_portfolio_id_projects ON projects(portfolio_id);
CREATE INDEX idx_portfolio_id_work ON workexperince(portfolio_id);
CREATE INDEX idx_portfolio_id_skills ON techincalskills(portfolio_id);
