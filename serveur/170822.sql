CREATE DATABASE "Ministera"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE public.users (
    id integer NOT NULL,
    name character(200) NOT NULL,
    email character(200) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT email_unique UNIQUE (email)
) WITH (OIDS = FALSE);

ALTER TABLE
    public.users OWNER to postgres;