CREATE DATABASE shop;

CREATE TABLE cashiers (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT,
    age INT,
    sex VARCHAR(6),
    yearsOfExperience INT,
    shopId INTEGER REFERENCES shop(id),
    previousWork TEXT
);

INSERT INTO cashiers ( name, age, sex, yearsOfExperience, shopId, previousWork ) VALUES ('Петренко Ольга', 24, 'female', 6, 1, 'Silpo');
INSERT INTO cashiers ( name, age, sex, yearsOfExperience, shopId, previousWork ) VALUES ('Шевченко Анна', 32, 'female', 8, 2, 'Arsen');
INSERT INTO cashiers ( name, age, sex, yearsOfExperience, shopId, previousWork ) VALUES ('Білий Олександр', 29, 'male', 5, 3, 'Auchan');
INSERT INTO cashiers ( name, age, sex, yearsOfExperience, shopId, previousWork ) VALUES ('Сидорук Григорій', 41, 'male', 15, 4, 'Carrefour');

CREATE TABLE workSchedule (
    id INT GENERATED ALWAYS AS IDENTITY,
    day VARCHAR(4),
    shift VARCHAR(6),
    cashRegisterNumber INT,
    userId INTEGER REFERENCES cashiers(id)
);

INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Mon', 'night', 1, 1);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Tue', 'night', 1, 1);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Fri', 'day', 3, 1);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Sat', 'day', 2, 1);

INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Mon', 'day', 2, 2);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Tue', 'day', 1, 2);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Wed', 'day', 3, 2);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Thu', 'day', 2, 2);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Fri', 'day', 4, 2);

INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Wed', 'night', 2, 3);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Thu', 'night', 1, 3);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Sat', 'day', 3, 3);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Sun', 'day', 2, 3);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Mon', 'day', 4, 3);

INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Mon', 'night', 2, 4);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Tue', 'night', 1, 4);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Thu', 'day', 3, 4);
INSERT INTO workSchedule (day, shift, cashRegisterNumber, userId) VALUES ('Fri', 'day', 2, 4);

CREATE TABLE shop (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    shop TEXT,
    city TEXT,
    address TEXT,
);

INSERT INTO shop ( shop, city, address ) VALUES ('ATB', 'Львів', 'Шевенка 100');
INSERT INTO shop ( shop, city, address ) VALUES ('ATB', 'Вінниця', 'Шевенка 100');
INSERT INTO shop ( shop, city, address ) VALUES ('ATB', 'Київ', 'Франка 19');
INSERT INTO shop ( shop, city, address ) VALUES ('ATB', 'Київ', 'Небесної Сотні 31');

CREATE TABLE cashRegister (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    shopId INTEGER REFERENCES shop(id),
    isWorking BOOLEAN,
    cashNumber INT
);

INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (1, true, 1);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (1, true, 2);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (1, true, 3);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (1, true, 4);

INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (2, true, 1);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (2, true, 2);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (2, true, 3);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (2, true, 4);

INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (3, true, 1);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (3, true, 2);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (3, true, 3);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (3, true, 4);

INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (4, true, 1);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (4, true, 2);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (4, true, 3);
INSERT INTO cashregister ( shopId, isWorking, cashNumber ) VALUES (4, true, 4);
