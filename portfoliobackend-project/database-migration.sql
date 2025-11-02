-- Create Portfolio Table for managing multiple portfolios per user
-- NOTE: The `portfolio` table and `portfolio_id` columns were removed from this migration
-- because backend code in this repository does not use the `portfolio` table.
-- If you later decide to enable multi-portfolio support, re-add the CREATE TABLE and
-- ALTER TABLE statements or move them to an optional migration file.

-- (Removed) CREATE TABLE IF NOT EXISTS portfolio (...)
-- (Removed) ALTER TABLE ... ADD COLUMN portfolio_id ... and related FOREIGN KEYs/indexes

-- Leaving this file intentionally minimal because the backend currently stores user
-- portfolio data within existing tables (personalinfo, projects, work_experince, skills).
-- Add optional migration later when backend support is implemented.
