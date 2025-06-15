--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)

-- Started on 2025-06-15 11:43:11 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16563)
-- Name: calificaciones; Type: TABLE; Schema: public; Owner: juanito
--

CREATE TABLE public.calificaciones (
    id bigint NOT NULL,
    estudiante_id bigint,
    curso_id bigint,
    nota_primer_corte numeric(4,2) NOT NULL,
    nota_segundo_corte numeric(4,2) NOT NULL,
    nota_tercer_corte numeric(4,2) NOT NULL,
    promedio_final numeric(4,2) GENERATED ALWAYS AS ((((nota_primer_corte + nota_segundo_corte) + nota_tercer_corte) / (3)::numeric)) STORED
);


ALTER TABLE public.calificaciones OWNER TO juanito;

--
-- TOC entry 219 (class 1259 OID 16562)
-- Name: calificaciones_id_seq; Type: SEQUENCE; Schema: public; Owner: juanito
--

CREATE SEQUENCE public.calificaciones_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.calificaciones_id_seq OWNER TO juanito;

--
-- TOC entry 3484 (class 0 OID 0)
-- Dependencies: 219
-- Name: calificaciones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juanito
--

ALTER SEQUENCE public.calificaciones_id_seq OWNED BY public.calificaciones.id;


--
-- TOC entry 218 (class 1259 OID 16553)
-- Name: cursos; Type: TABLE; Schema: public; Owner: juanito
--

CREATE TABLE public.cursos (
    id bigint NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    creditos integer NOT NULL,
    CONSTRAINT cursos_creditos_check CHECK ((creditos > 0))
);


ALTER TABLE public.cursos OWNER TO juanito;

--
-- TOC entry 217 (class 1259 OID 16552)
-- Name: cursos_id_seq; Type: SEQUENCE; Schema: public; Owner: juanito
--

CREATE SEQUENCE public.cursos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cursos_id_seq OWNER TO juanito;

--
-- TOC entry 3485 (class 0 OID 0)
-- Dependencies: 217
-- Name: cursos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juanito
--

ALTER SEQUENCE public.cursos_id_seq OWNED BY public.cursos.id;


--
-- TOC entry 216 (class 1259 OID 16539)
-- Name: estudiantes; Type: TABLE; Schema: public; Owner: juanito
--

CREATE TABLE public.estudiantes (
    id bigint NOT NULL,
    nombres character varying(100) NOT NULL,
    apellidos character varying(100) NOT NULL,
    codigo_identificacion character varying(50) NOT NULL,
    grado character varying(20) NOT NULL,
    promedio numeric(4,2),
    imagen_url text,
    correo_electronico character varying(100) NOT NULL,
    esta_activo boolean DEFAULT true
);


ALTER TABLE public.estudiantes OWNER TO juanito;

--
-- TOC entry 215 (class 1259 OID 16538)
-- Name: estudiantes_id_seq; Type: SEQUENCE; Schema: public; Owner: juanito
--

CREATE SEQUENCE public.estudiantes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.estudiantes_id_seq OWNER TO juanito;

--
-- TOC entry 3486 (class 0 OID 0)
-- Dependencies: 215
-- Name: estudiantes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juanito
--

ALTER SEQUENCE public.estudiantes_id_seq OWNED BY public.estudiantes.id;


--
-- TOC entry 222 (class 1259 OID 16582)
-- Name: profesores; Type: TABLE; Schema: public; Owner: juanito
--

CREATE TABLE public.profesores (
    id bigint NOT NULL,
    nombres character varying(100) NOT NULL,
    apellidos character varying(100) NOT NULL,
    correo_electronico character varying(100) NOT NULL,
    contrasena text NOT NULL
);


ALTER TABLE public.profesores OWNER TO juanito;

--
-- TOC entry 221 (class 1259 OID 16581)
-- Name: profesores_id_seq; Type: SEQUENCE; Schema: public; Owner: juanito
--

CREATE SEQUENCE public.profesores_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.profesores_id_seq OWNER TO juanito;

--
-- TOC entry 3487 (class 0 OID 0)
-- Dependencies: 221
-- Name: profesores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juanito
--

ALTER SEQUENCE public.profesores_id_seq OWNED BY public.profesores.id;


--
-- TOC entry 3307 (class 2604 OID 16566)
-- Name: calificaciones id; Type: DEFAULT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.calificaciones ALTER COLUMN id SET DEFAULT nextval('public.calificaciones_id_seq'::regclass);


--
-- TOC entry 3306 (class 2604 OID 16556)
-- Name: cursos id; Type: DEFAULT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.cursos ALTER COLUMN id SET DEFAULT nextval('public.cursos_id_seq'::regclass);


--
-- TOC entry 3304 (class 2604 OID 16542)
-- Name: estudiantes id; Type: DEFAULT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.estudiantes ALTER COLUMN id SET DEFAULT nextval('public.estudiantes_id_seq'::regclass);


--
-- TOC entry 3309 (class 2604 OID 16585)
-- Name: profesores id; Type: DEFAULT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.profesores ALTER COLUMN id SET DEFAULT nextval('public.profesores_id_seq'::regclass);


--
-- TOC entry 3476 (class 0 OID 16563)
-- Dependencies: 220
-- Data for Name: calificaciones; Type: TABLE DATA; Schema: public; Owner: juanito
--

COPY public.calificaciones (id, estudiante_id, curso_id, nota_primer_corte, nota_segundo_corte, nota_tercer_corte) FROM stdin;
\.


--
-- TOC entry 3474 (class 0 OID 16553)
-- Dependencies: 218
-- Data for Name: cursos; Type: TABLE DATA; Schema: public; Owner: juanito
--

COPY public.cursos (id, nombre, descripcion, creditos) FROM stdin;
\.


--
-- TOC entry 3472 (class 0 OID 16539)
-- Dependencies: 216
-- Data for Name: estudiantes; Type: TABLE DATA; Schema: public; Owner: juanito
--

COPY public.estudiantes (id, nombres, apellidos, codigo_identificacion, grado, promedio, imagen_url, correo_electronico, esta_activo) FROM stdin;
1	Camila	Rodríguez	2566001	11A	4.30	http://localhost:5000/uploads/camila.png	camila.rodriguez@example.com	t
\.


--
-- TOC entry 3478 (class 0 OID 16582)
-- Dependencies: 222
-- Data for Name: profesores; Type: TABLE DATA; Schema: public; Owner: juanito
--

COPY public.profesores (id, nombres, apellidos, correo_electronico, contrasena) FROM stdin;
1	Ana	López	ana.lopez@colegio.edu	1234
\.


--
-- TOC entry 3488 (class 0 OID 0)
-- Dependencies: 219
-- Name: calificaciones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: juanito
--

SELECT pg_catalog.setval('public.calificaciones_id_seq', 1, false);


--
-- TOC entry 3489 (class 0 OID 0)
-- Dependencies: 217
-- Name: cursos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: juanito
--

SELECT pg_catalog.setval('public.cursos_id_seq', 1, false);


--
-- TOC entry 3490 (class 0 OID 0)
-- Dependencies: 215
-- Name: estudiantes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: juanito
--

SELECT pg_catalog.setval('public.estudiantes_id_seq', 1, true);


--
-- TOC entry 3491 (class 0 OID 0)
-- Dependencies: 221
-- Name: profesores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: juanito
--

SELECT pg_catalog.setval('public.profesores_id_seq', 1, true);


--
-- TOC entry 3320 (class 2606 OID 16569)
-- Name: calificaciones calificaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.calificaciones
    ADD CONSTRAINT calificaciones_pkey PRIMARY KEY (id);


--
-- TOC entry 3318 (class 2606 OID 16561)
-- Name: cursos cursos_pkey; Type: CONSTRAINT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_pkey PRIMARY KEY (id);


--
-- TOC entry 3312 (class 2606 OID 16549)
-- Name: estudiantes estudiantes_codigo_identificacion_key; Type: CONSTRAINT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.estudiantes
    ADD CONSTRAINT estudiantes_codigo_identificacion_key UNIQUE (codigo_identificacion);


--
-- TOC entry 3314 (class 2606 OID 16551)
-- Name: estudiantes estudiantes_correo_electronico_key; Type: CONSTRAINT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.estudiantes
    ADD CONSTRAINT estudiantes_correo_electronico_key UNIQUE (correo_electronico);


--
-- TOC entry 3316 (class 2606 OID 16547)
-- Name: estudiantes estudiantes_pkey; Type: CONSTRAINT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.estudiantes
    ADD CONSTRAINT estudiantes_pkey PRIMARY KEY (id);


--
-- TOC entry 3323 (class 2606 OID 16591)
-- Name: profesores profesores_correo_electronico_key; Type: CONSTRAINT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.profesores
    ADD CONSTRAINT profesores_correo_electronico_key UNIQUE (correo_electronico);


--
-- TOC entry 3325 (class 2606 OID 16589)
-- Name: profesores profesores_pkey; Type: CONSTRAINT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.profesores
    ADD CONSTRAINT profesores_pkey PRIMARY KEY (id);


--
-- TOC entry 3321 (class 1259 OID 16580)
-- Name: idx_estudiante_curso; Type: INDEX; Schema: public; Owner: juanito
--

CREATE INDEX idx_estudiante_curso ON public.calificaciones USING btree (estudiante_id, curso_id);


--
-- TOC entry 3326 (class 2606 OID 16575)
-- Name: calificaciones calificaciones_curso_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.calificaciones
    ADD CONSTRAINT calificaciones_curso_id_fkey FOREIGN KEY (curso_id) REFERENCES public.cursos(id) ON DELETE CASCADE;


--
-- TOC entry 3327 (class 2606 OID 16570)
-- Name: calificaciones calificaciones_estudiante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: juanito
--

ALTER TABLE ONLY public.calificaciones
    ADD CONSTRAINT calificaciones_estudiante_id_fkey FOREIGN KEY (estudiante_id) REFERENCES public.estudiantes(id) ON DELETE CASCADE;


-- Completed on 2025-06-15 11:43:11 -05

--
-- PostgreSQL database dump complete
--

