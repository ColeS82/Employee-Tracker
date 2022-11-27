INSERT INTO department (name)
VALUES
    ('IT'),
    ('Sales'),
    ('Engineering'),
    ('Customer Service'),
    ('Data Science');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Cyber Secerity', 75000, 1),
    ('IT Specialist', 50000, 1),
    ('Customer Sales Solutions', 60000, 2),
    ('Sales Rep', 70000, 2),
    ('Data Engineer', 100000, 3),
    ('Software Engineer', 100000, 3),
    ('Call Center', 65000, 4),
    ('Customer Service', 55000, 4),
    ('Data Scientist', 100000, 5),
    ('Data Engineer', 100000, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('Jo', 'blo', 2,2),
    ('John', 'Darn', 5, 5),
    ('Brandon', 'Beeker', 1, 1),
    ('Sara', 'Source', 1, 2),
    ('Greg', 'Aromia', 3,2),
    ('Thomas', 'Onich', 1, 5),
    ('Link', 'Doogel', 4, 1),
    ('Matt', 'Lancaster', 3, 2),
    ('James', 'Lampy', 2,5),
    ('Jayden', 'Realms', 5, 1),
    ('Gran', 'Harper', 3, 1),
    ('Sam', 'Iam', 4, 4),
    ('Dave', 'Guy', 4,null),
    ('Heather', 'Leels', 2, null),
    ('Ted', 'Smith', 3, null),
    ('Trey', 'Stone', 5, null)