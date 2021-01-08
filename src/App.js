import './index.css';

function App() {
  return (
    // <!-- main container -->
    <div className="wrapper">
    <aside className="sidebar">
        <img className="my-photo" src="./img/foto_cv_nazaruk_2.jpeg" alt="Foto for CV"/>

        {/* <!-- Contacts conteiner --> */}
        <div className="Contacts-conteiner"> 
            <h3 className="Contacts-title"> Contacts</h3>
            <div>
                <span className="Contacts-link-type"></span>  <a className="Contacts-link" href="+38 093 949 28 09">+38 093 949 28 09</a>
            </div>
            <div>
                <span className="Contacts-link-type"></span>  <a className="Contacts-link" href="mailto:nazaruk.v92@gmail.com">nazaruk.v92@gmail.com</a>
            </div>
            <div>
                <span className="Contacts-link-type"></span>  <a className="Contacts-link" target="_blank" rel="noreferrer" href="https://github.com/VINK92">My GitHub</a>
            </div>
            <div>
                <span className="Contacts-link-type"></span>  <a className="Contacts-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nazaruk-v">My LinkedIn</a>
            </div>
            <div>
                <span className="Contacts-link-type"></span>  <a className="Contacts-link" href="./NazarukV-CV.pdf" download>Download CV</a>
            </div>
        </div>

        {/* <!-- Tech skills container--> */}
        <div className="Tech-Skills-conteiner">
        <h3 className="Tech-Skills-title">Tech Skills</h3>
        <ul>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">HTML5</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">CSS3</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">GIT/GitHub</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">WebPack</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">JavaScript</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">React.js</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">React Native</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">Node.js</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">Redux</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">Axios</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">Bootstrap</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">REST API</span> </li>
            <li className="Tech-Skills-item"> <span className="Tech-Skills-text">DOM-model</span> </li>
        </ul>
        </div>

        {/* <!-- Soft Skills container--> */}
        <div className="Soft-Skills-conteiner">
        <h3 className="Soft-Skills-title">Soft Skills</h3>
        <ul>
            <li className="Soft-Skills-item"> <span className="Soft-Skills-text">Fast learning</span> </li>
            <li className="Soft-Skills-item"> <span className="Soft-Skills-text">Hardwork</span> </li>
            <li className="Soft-Skills-item"> <span className="Soft-Skills-text">Problem solver</span> </li>
            <li className="Soft-Skills-item"> <span className="Soft-Skills-text">Responsible</span> </li>
            <li className="Soft-Skills-item"> <span className="Soft-Skills-text">Scrum</span> </li>
            <li className="Soft-Skills-item"> <span className="Soft-Skills-text">Teamwork</span> </li>
        </ul>
        </div>
    </aside>
    {/* <!-- about me container --> */}
    <div className="about-me-container">
        {/* <!-- about me main info --> */}
        <div className="info-container">
            <h2 className="profassion">Full Stack Developer</h2>
            <h1 className="name">Viktoriia Nazaruk</h1>
    
            <p className="description">
                I quickly learn new technologies and improve. 
                On the way to being work on not only in the development 
                of sites but also applications.
            </p>
        </div>
    
        {/* <!-- project container --> */}
        <div className="project-container">
            <h3 className="about-me-title">Projects</h3>
            <ol className="number">
                <li className="project-item">
                    <a className="projects-link" target="_blank" rel="noreferrer" href="https://slimmom-fixers.netlify.app/"> SLIM MOM</a>
                    {/* <!-- <span className="dots">.............................</span> --> */}
                    <span> <b> [ </b> <span className="tech-name"> React.js, Redux </span> <b> ] </b> </span>
                </li>
                <li className="project-item">
                    <a className="projects-link" target="_blank" rel="noreferrer" href="https://gal4enock.github.io/Project-JS-filmoteka/">FILMOTEKA</a>
                    {/* <!-- <span className="dots">.............................</span> --> */}
                    <span> <b> [ </b> <span className="tech-name"> JavaScript</span> <b> ] </b> </span>
                </li>
                <li className="project-item">
                    <a className="projects-link" target="_blank" rel="noreferrer" href="https://vink92.github.io/parcel-project-template/">ICEC REAM</a>
                    {/* <!-- <span className="dots">......................</span> --> */}
                    <span> <b> [ </b> <span className="tech-name"> HTML5, CSS3 </span> <b> ] </b></span>
                </li>
    
    
            </ol>
        </div>
        {/* <!-- Work Experience--> */}
        <div>
            <h3 className="about-me-title">Work Experience</h3>
            <div>
                {/* <!-- company 1 --> */}
                <h4 className="profassion-title"> CFO <span className="profassion-company">Mandarinki Express</span> </h4>
                <span className="profassion-time">January 2017 - September 2020<span className="profassion-divider">|</span> Ukraine </span>
                <ul className="profassion-duties">
                    <li className="profassion-duties-item ">Organization of accounting from the beginning</li>
                    <li className="profassion-duties-item ">Work on improving accounting systems, writing technical specifications</li>
                    <li className="profassion-duties-item ">Control over the compilation and implementation of financial indicators</li>
                    <li className="profassion-duties-item ">Internal and external reporting</li>
                </ul>
            </div>
    
            <div>
                {/* <!-- company 2 --> */}
                <h4 className="profassion-title"> AUDITOR <span className="profassion-company"> Wörwag Pharma LLC</span> </h4>
                <span className="profassion-time">2014 – present  <span className="profassion-divider">|</span> Ukraine </span>
                <ul className="profassion-duties">
                    <li className="profassion-duties-item ">Checking external reports and all documentations</li>
                    <li className="profassion-duties-item ">Internal reporting about checking</li>
                </ul>    
            </div>
            {/* <!--Education--> */}
            <div className="education">
                <h3 className="about-me-title">Education</h3>
                <h4 className="university">GO IT SCHOOL</h4>
                <h5 className="education-major">Bootcamp Full-stack developer</h5>
                <span className="education-time"> Septermber 2020 - February 2021 <span className="profassion-divider">|</span> Ukraine </span>
            </div>

            <div className="education">
                <h4 className="university">Kiev National University of Trade and Economics</h4>
                <h5 className="education-major">Master's degree, Accounting end audit</h5>
                <span className="education-time"> Septermber 2009 - June 2015 <span className="profassion-divider">|</span> Ukraine </span>
            </div>
        </div>
    </div>
  </div>
  );
}

export default App;
