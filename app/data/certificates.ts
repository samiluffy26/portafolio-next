export interface Certificate {
  title: string;
  filename: string;
  type: "pdf" | "image";
  category: string;
}

export const getCertificates = (locale: 'en' | 'es'): Certificate[] => {
  return locale === 'en' ? certificatesEn : certificatesEs;
};

const certificatesEn: Certificate[] = [
  { title: "Database Administrator", filename: "AdministradorBaseDatos.pdf", type: "pdf", category: "Database" },
  { title: "Server Administrator", filename: "AdministradorDeServidores.pdf", type: "pdf", category: "DevOps" },
  { title: "AWS Cloud", filename: "AMAZON WEB SERVICES.pdf", type: "pdf", category: "Cloud" },
  { title: "Advanced Data Science Analysis", filename: "analalisis-avanzado-DataScience.pdf", type: "pdf", category: "Data" },
  { title: "ASP.NET Core Web API", filename: "ASP.NET CORE WEB API.pdf", type: "pdf", category: "Backend" },
  { title: "Backend", filename: "Backend.pdf", type: "pdf", category: "Backend" },
  { title: "Basic C# with Microsoft", filename: "certi.jpg", type: "image", category: "Backend" },
  { title: "Leadership", filename: "certifiado-Liderazgo.pdf", type: "pdf", category: "Soft Skills" },
  { title: "AI Development", filename: "Certificado-DesarrolloIA.pdf", type: "pdf", category: "AI" },
  { title: "Fullstack Web Development", filename: "certificado-Indotel.pdf", type: "pdf", category: "Fullstack" },
  { title: "AI + Big Data", filename: "CertificadoIABIGDATA.pdf", type: "pdf", category: "AI" },
  { title: "Java Coding", filename: "codificacion-java.pdf", type: "pdf", category: "Backend" },
  { title: "Snowflake Course", filename: "Curso-Snowflake.pdf", type: "pdf", category: "Data" },
  { title: "Java for AI", filename: "CursoJava-IA.pdf", type: "pdf", category: "AI" },
  { title: "SQL Review", filename: "cursoRepaso-Sql.pdf", type: "pdf", category: "Database" },
  { title: "Data Literacy", filename: "Data-Literacy.pdf", type: "pdf", category: "Data" },
  { title: "Mobile Apps Developer", filename: "DesarrolladorAppsMobiles.pdf", type: "pdf", category: "Mobile" },
  { title: "Back-end Developer", filename: "DesarrolladorBack-end.pdf", type: "pdf", category: "Backend" },
  { title: "Front-end Developer", filename: "DesarrolladorFront-end.pdf", type: "pdf", category: "Frontend" },
  { title: "Python AI Development", filename: "DesarrolloPYIA.pdf", type: "pdf", category: "AI" },
  { title: "Diploma", filename: "Diplomado.pdf", type: "pdf", category: "Course" },
  { title: "Django and Laravel", filename: "django-laravel.pdf", type: "pdf", category: "Backend" },
  { title: "Data Analysis and Visualization Expert", filename: "Experto en analisis y visualizacion de datos.pdf", type: "pdf", category: "Data" },
  { title: "Golang Course", filename: "golangCourse.pdf", type: "pdf", category: "Backend" },
  { title: "OWASP API Java", filename: "OWASP-API-Java.pdf", type: "pdf", category: "Security" },
  { title: "Python Practice", filename: "Python-Practica.pdf", type: "pdf", category: "Backend" },
  { title: "R Advanced Data Manipulation", filename: "R-ManipulacionAvanzada-Datos.pdf", type: "pdf", category: "Data" },
  { title: "React First Course", filename: "React Primer Curso.pdf", type: "pdf", category: "Frontend" },
  { title: "API Security", filename: "seguridad-apis.pdf", type: "pdf", category: "Security" },
  { title: "Spring Boot Course", filename: "SpringBootCourse.pdf", type: "pdf", category: "Backend" },
  { title: "SQL 2025", filename: "SQL 2025.pdf", type: "pdf", category: "Database" },
  { title: ".NET with SQL", filename: "_NET con SQL.pdf", type: "pdf", category: "Backend" },
];

const certificatesEs: Certificate[] = [
  { title: "Administrador de Base de Datos", filename: "AdministradorBaseDatos.pdf", type: "pdf", category: "Database" },
  { title: "Administrador de Servidores", filename: "AdministradorDeServidores.pdf", type: "pdf", category: "DevOps" },
  { title: "AWS Cloud", filename: "AMAZON WEB SERVICES.pdf", type: "pdf", category: "Cloud" },
  { title: "Análisis Avanzado de Data Science", filename: "analalisis-avanzado-DataScience.pdf", type: "pdf", category: "Data" },
  { title: "ASP.NET Core Web API", filename: "ASP.NET CORE WEB API.pdf", type: "pdf", category: "Backend" },
  { title: "Backend", filename: "Backend.pdf", type: "pdf", category: "Backend" },
  { title: "C# básico con Microsoft", filename: "certi.jpg", type: "image", category: "Backend" },
  { title: "Liderazgo", filename: "certifiado-Liderazgo.pdf", type: "pdf", category: "Soft Skills" },
  { title: "Desarrollo IA", filename: "Certificado-DesarrolloIA.pdf", type: "pdf", category: "AI" },
  { title: "Desarrollo Web Fullstack", filename: "certificado-Indotel.pdf", type: "pdf", category: "Fullstack" },
  { title: "IA + Big Data", filename: "CertificadoIABIGDATA.pdf", type: "pdf", category: "AI" },
  { title: "Codificación Java", filename: "codificacion-java.pdf", type: "pdf", category: "Backend" },
  { title: "Curso Snowflake", filename: "Curso-Snowflake.pdf", type: "pdf", category: "Data" },
  { title: "Java para IA", filename: "CursoJava-IA.pdf", type: "pdf", category: "AI" },
  { title: "Repaso SQL", filename: "cursoRepaso-Sql.pdf", type: "pdf", category: "Database" },
  { title: "Data Literacy", filename: "Data-Literacy.pdf", type: "pdf", category: "Data" },
  { title: "Desarrollador Apps Móviles", filename: "DesarrolladorAppsMobiles.pdf", type: "pdf", category: "Mobile" },
  { title: "Desarrollador Back-end", filename: "DesarrolladorBack-end.pdf", type: "pdf", category: "Backend" },
  { title: "Desarrollador Front-end", filename: "DesarrolladorFront-end.pdf", type: "pdf", category: "Frontend" },
  { title: "Desarrollo PY IA", filename: "DesarrolloPYIA.pdf", type: "pdf", category: "AI" },
  { title: "Diplomado", filename: "Diplomado.pdf", type: "pdf", category: "Course" },
  { title: "Django y Laravel", filename: "django-laravel.pdf", type: "pdf", category: "Backend" },
  { title: "Experto en análisis y visualización de datos", filename: "Experto en analisis y visualizacion de datos.pdf", type: "pdf", category: "Data" },
  { title: "Golang Course", filename: "golangCourse.pdf", type: "pdf", category: "Backend" },
  { title: "OWASP API Java", filename: "OWASP-API-Java.pdf", type: "pdf", category: "Security" },
  { title: "Python Práctica", filename: "Python-Practica.pdf", type: "pdf", category: "Backend" },
  { title: "R Manipulación Avanzada de Datos", filename: "R-ManipulacionAvanzada-Datos.pdf", type: "pdf", category: "Data" },
  { title: "React Primer Curso", filename: "React Primer Curso.pdf", type: "pdf", category: "Frontend" },
  { title: "Seguridad de APIs", filename: "seguridad-apis.pdf", type: "pdf", category: "Security" },
  { title: "Spring Boot Course", filename: "SpringBootCourse.pdf", type: "pdf", category: "Backend" },
  { title: "SQL 2025", filename: "SQL 2025.pdf", type: "pdf", category: "Database" },
  { title: ".NET con SQL", filename: "_NET con SQL.pdf", type: "pdf", category: "Backend" },
];
