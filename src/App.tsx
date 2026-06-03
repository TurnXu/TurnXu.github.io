import { useState } from "react";

type Project = {
  title: string;
  time: string;
  description: string;
  techniques: string[];
  highlights?: string[];
  metrics?: string[];
  badges?: string[];
  validation?: string;
  demo?: string;
  image?: string;
  imageAlt?: string;
  resultRows?: Array<{
    label: string;
    value: string;
  }>;
  featured?: boolean;
  links: Array<{
    label: string;
    href: string;
  }>;
};

type DemoItem = {
  title: string;
  caption: string;
  src?: string;
  kind: "video" | "figure";
  figures?: Array<{
    title: string;
    image: string;
    pdf: string;
  }>;
};

const profileStats = [
  { label: "University", value: "Hunan University" },
  { label: "GPA", value: "3.8 / 4.0" },
  { label: "Rank", value: "5 / 71" },
  { label: "CET-6", value: "492" },
];

const projects: Project[] = [
  {
    title:
      "Imaging-Informed Progressive Fusion for Mosaic-based Hyperspectral Image Reconstruction",
    time: "Mar. 2026 - May 2026",
    badges: ["Research Publication", "Submitted to Information Fusion", "Co-first Author"],
    description:
      "Designed a physics-guided progressive reconstruction framework for mosaiced and PAN hyperspectral image fusion, converting an ill-posed reconstruction problem into staged inverse recovery aligned with the imaging degradation model.",
    validation:
      "The method integrates physical priors, cross-scale parameter sharing, and composite losses for interpretable hyperspectral reconstruction.",
    highlights: [
      "Decomposes mosaic degradation into hierarchical inverse stages for progressive recovery.",
      "Uses cross-scale parameter sharing to exploit structural consistency across reconstruction stages.",
      "Evaluated on simulated CAVE/Chikusei data and real-world no-reference reconstruction.",
    ],
    techniques: [
      "PyTorch",
      "Hyperspectral Imaging",
      "Physics-informed Learning",
      "Image Fusion",
      "Unsupervised Learning",
    ],
    metrics: ["41.84 dB PSNR", "0.9880 SSIM", "0.9186 QNR"],
    featured: true,
    links: [
      { label: "Paper", href: "assets/hsi-paper.pdf" },
      { label: "GitHub", href: "https://github.com/TurnXu" },
      { label: "Report", href: "#" },
    ],
  },
  {
    title: "Stereo Visual Odometry and UAV Localization Pipeline",
    time: "Sept. 2025 - Dec. 2025",
    description:
      "Implemented a ROS Noetic / C++ stereo VO pipeline with GFTT feature detection, LK optical-flow tracking, stereo triangulation, and PnP/RANSAC pose estimation.",
    validation:
      "Validated the localization and navigation pipeline in OptiTrack-assisted real-world UAV experiments.",
    highlights: [
      "Uses calibrated stereo camera models and keyframe-to-current-frame tracking.",
      "Added frame-quality monitoring, VO confidence estimation, reprojection-error filtering, and optional IMU-based consistency checking.",
      "Designed as a stereo VO experiment and visualization pipeline, not a full tightly coupled VIO/SLAM framework.",
    ],
    metrics: ["ROS Noetic / C++", "RViz outputs", "VO confidence diagnostics"],
    techniques: [
      "ROS",
      "OpenCV",
      "Stereo VO",
      "LK Optical Flow",
      "PnP",
      "RANSAC",
      "Eigen",
      "PCL",
      "UAV Navigation",
      "RViz",
    ],
    demo: "assets/demo-stereo-vo.mp4",
    links: [
      { label: "Demo Video", href: "assets/demo-stereo-vo.mp4" },
      { label: "GitHub", href: "https://github.com/TurnXu" },
      { label: "Report", href: "#" },
    ],
  },
  {
    title: "Auto-Aiming Platform",
    time: "July 2025 - Aug. 2025",
    description:
      "Built the MaixCAM-side embedded vision module for a 2025 Electronic Design Contest E-problem system, combining YOLOv5-based black-border detection, ROI cropping, geometric correction, target-center extraction, and UART packet output.",
    validation:
      "The module outputs target-center information for downstream aiming control through a compact serial protocol.",
    highlights: [
      "Runs on MaixCAM with GUI interaction, display feedback, and UART communication.",
      "Defines packet output for laser-point or rectangle-center coordinates.",
      "Provincial Third Prize, National College Students' Electronic Design Contest, Hunan Province.",
    ],
    metrics: ["MaixCAM", ">25 FPS", "UART packet output"],
    techniques: [
      "YOLOv5",
      "MaixCAM",
      "Embedded Vision",
      "MaixPy",
      "ROI Cropping",
      "Geometric Correction",
      "GUI Interaction",
      "Coordinate Output",
      "Serial Communication",
      "STM32 Interface",
    ],
    demo: "assets/demo-auto-aiming.mp4",
    links: [
      { label: "Demo Video", href: "assets/demo-auto-aiming.mp4" },
      { label: "GitHub", href: "https://github.com/TurnXu" },
      { label: "Report", href: "#" },
    ],
  },
];

const demoItems: DemoItem[] = [
  {
    title: "Stereo VO UAV Localization",
    caption:
      "Feature detection, LK tracking, stereo matching, SVD triangulation, PnP/RANSAC pose update, and RViz trajectory inspection.",
    kind: "video",
    src: "assets/demo-stereo-vo.mp4",
  },
  {
    title: "Embedded Auto-Aiming Vision",
    caption:
      "YOLOv5 detection, ROI refinement, perspective correction, target-center extraction, and UART output for downstream aiming control.",
    kind: "video",
    src: "assets/demo-auto-aiming.mp4",
  },
  {
    title: "Hyperspectral Reconstruction Results",
    caption:
      "Framework, simulated CAVE reconstruction, and real-world evaluation figures from the submitted paper.",
    kind: "figure",
    figures: [
      {
        title: "Progressive fusion framework",
        image: "assets/hsi-fig-framework.png",
        pdf: "assets/hsi-fig-framework.pdf",
      },
      {
        title: "CAVE reconstruction comparison",
        image: "assets/hsi-fig-cave.png",
        pdf: "assets/hsi-fig-cave.pdf",
      },
      {
        title: "Real-world evaluation",
        image: "assets/hsi-fig-realworld.png",
        pdf: "assets/hsi-fig-realworld.pdf",
      },
    ],
  },
];

const skillGroups = [
  {
    title: "Programming",
    items: ["C/C++", "Python", "MATLAB"],
  },
  {
    title: "Robotics Systems",
    items: ["ROS", "PX4", "MAVROS", "RViz", "Linux", "Eigen", "PCL"],
  },
  {
    title: "Computer Vision & AI",
    items: ["OpenCV", "PyTorch", "YOLOv5", "Visual Odometry"],
  },
  {
    title: "Hardware & Experimental Platforms",
    items: [
      "Git",
      "LaTeX",
      "Intel RealSense",
      "OptiTrack",
      "STM32",
      "UART/I2C",
    ],
  },
];

function VideoPanel({ item }: { item: DemoItem }) {
  const [hasVideo, setHasVideo] = useState(true);

  if (item.kind === "figure") {
    const [primaryFigure, ...secondaryFigures] = item.figures ?? [];

    return (
      <article className="demo-panel figure-showcase">
        <div className="figure-showcase-header">
          <div>
            <p className="eyebrow">Paper Figures</p>
            <h3>{item.title}</h3>
          </div>
          <a href="assets/hsi-paper.pdf">View Paper PDF</a>
        </div>
        <p>{item.caption}</p>
        {primaryFigure && (
          <a className="paper-figure-main" href={primaryFigure.pdf} target="_blank">
            <img src={primaryFigure.image} alt={primaryFigure.title} />
            <strong>{primaryFigure.title}</strong>
          </a>
        )}
        <div className="paper-figure-pair">
          {secondaryFigures.map((figure) => (
            <a href={figure.pdf} key={figure.title} target="_blank">
              <img src={figure.image} alt={figure.title} />
              <strong>{figure.title}</strong>
            </a>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className="demo-panel">
      <div className="video-frame">
        {item.kind === "video" && hasVideo ? (
          <video
            controls
            preload="metadata"
            src={item.src}
              onError={() => setHasVideo(false)}
            />
        ) : (
          <div className="video-placeholder">
            <span>Video placeholder</span>
            <strong>{item.src}</strong>
          </div>
        )}
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.caption}</p>
      </div>
    </article>
  );
}

function App() {
  return (
    <main>
      <header className="hero section">
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#demo-gallery">Demos</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">Robotics / AI / Computer Vision</p>
            <h1>Fangshuo Xu</h1>
            <p className="title-line">
              Robotics Engineering Student | Embodied AI | State Estimation
            </p>
            <p className="hero-summary">
              I build perception and state-estimation systems for physically
              grounded embodied intelligence, with experience in robotic vision,
              stereo visual odometry, embedded vision, and physics-informed
              reconstruction.
            </p>
            <article className="research-statement">
              <h2>Research Statement</h2>
              <p>
                My research interests lie at the interface of robotic perception,
                state estimation, and trustworthy embodied AI. I am particularly
                interested in integrating physical priors, geometric estimation,
                and real-world deployment constraints to improve the reliability
                of intelligent robotic systems.
              </p>
            </article>
            <div className="hero-actions">
              <a className="button primary" href="https://github.com/TurnXu">
                GitHub
              </a>
              <a className="button secondary" href="mailto:18340001113@163.com">
                Email
              </a>
            </div>
            <div className="profile-stats" aria-label="Academic profile">
              {profileStats.map((stat) => (
                <div key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <aside className="profile-panel" aria-label="Profile portrait">
            <img
              src="assets/profile-photo.jpg"
              alt="Fangshuo Xu portrait"
              className="profile-photo"
            />
            <div className="profile-focus">
              <span>Physical Grounding</span>
              <span>State Estimation</span>
              <span>Trustworthy Embodied AI</span>
            </div>
          </aside>
        </div>
      </header>

      <section className="section" id="about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Research Interests</h2>
        </div>
        <p className="section-lead">
          My work explores how intelligent robotic systems can remain reliable
          under real-world sensing uncertainty. I am particularly interested in
          robotic perception, visual state estimation, physics-informed learning,
          and trustworthy embodied AI systems that connect learning, geometry,
          and control.
        </p>
        <div className="interest-grid">
          {[
            "Embodied AI",
            "Robotic perception",
            "Visual odometry",
            "State estimation",
            "Physics-informed learning",
            "Trustworthy AI systems",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Featured Projects</p>
          <h2>Research and Engineering Work</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card${project.featured ? " academic-card" : ""}`}
              key={project.title}
            >
              <div className="project-header">
                <p>{project.time}</p>
                <h3>{project.title}</h3>
              </div>
              {project.badges && (
                <div className="publication-badges">
                  {project.badges.map((badge) => (
                    <span key={badge}>{badge}</span>
                  ))}
                </div>
              )}
              <p>{project.description}</p>
              {project.validation && (
                <div className="validation-box">{project.validation}</div>
              )}
              {project.metrics && (
                <div className="metric-strip" aria-label={`${project.title} metrics`}>
                  {project.metrics.map((metric) => (
                    <strong key={metric}>{metric}</strong>
                  ))}
                </div>
              )}
              {project.image && (
                <a className="project-image-link" href={project.image}>
                  <img src={project.image} alt={project.imageAlt ?? project.title} />
                </a>
              )}
              {project.resultRows && (
                <dl className="result-table">
                  {project.resultRows.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {project.featured && (
                <p className="paper-note">
                  Full citation and PDF are listed in Research Outputs.
                </p>
              )}
              {project.highlights && (
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              <div className="tag-list">
                {project.techniques.map((technique) => (
                  <span key={technique}>{technique}</span>
                ))}
              </div>
              <div className="card-actions">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="demo-gallery">
        <div className="section-heading">
          <p className="eyebrow">Demo Gallery</p>
          <h2>System Demonstrations</h2>
        </div>
        <div className="demo-grid">
          {demoItems.map((item) => (
            <VideoPanel item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section two-column" id="publications">
        <div className="section-heading">
          <p className="eyebrow">Research Outputs</p>
          <h2>Publication and research artifacts</h2>
        </div>
        <article className="publication-card">
          <span className="publication-type">Submitted to Information Fusion</span>
          <h3>
            Imaging-Informed Progressive Fusion for Mosaic-based Hyperspectral
            Image Reconstruction
          </h3>
          <p>Wang, N., Xu, F., Dian, R., Li, S.</p>
          <strong>Co-First Author</strong>
          <p className="citation-text">
            Wang, N., Xu, F., Dian, R., and Li, S. "Imaging-Informed
            Progressive Fusion for Mosaic-based Hyperspectral Image
            Reconstruction." Submitted to <em>Information Fusion</em>.
          </p>
          <div className="card-actions">
            <a href="assets/hsi-paper.pdf">Paper</a>
            <a href="assets/hsi-paper.pdf">PDF</a>
            <a href="#">Project Page</a>
          </div>
        </article>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Technical Expertise</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-block" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="section footer" id="contact">
        <div className="footer-left">
          <p className="eyebrow">Contact</p>
          <h2>Fangshuo Xu</h2>
          <div className="contact-grid">
            <article>
              <h3>Current Interests</h3>
              <p>Embodied AI</p>
              <p>State Estimation</p>
              <p>Robot Perception</p>
              <p>Safe Autonomy</p>
            </article>
            <article>
              <h3>Current Status</h3>
              <p>B.Eng Candidate</p>
              <p>Hunan University</p>
              <p>Expected Graduation: 2027</p>
            </article>
          </div>
        </div>
        <div className="footer-links">
          <a href="mailto:18340001113@163.com">18340001113@163.com</a>
          <a href="https://github.com/TurnXu">github.com/TurnXu</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
