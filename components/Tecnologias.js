import Titulo from "./Titulo";
import styles from "../styles/Tecnologias.module.css";
import Image from "next/image"

function Tecnologias() {
  return (
    <section className={styles.tecnologias}>
      <Titulo>Tecnologias dominadas</Titulo>
      <div>
        <div className={styles.iconos}>
          <div className={styles.item}>
            <div>
              <Image width={42} height={42} priority src="/img/html.svg" alt="html" />
            </div>
            <div className={styles.tecnologia}>HTML5</div>
          </div>

          <div className={styles.item}>
            <div>
              <Image width={42} height={42} priority src="/img/css.svg" alt="css" />
            </div>
            <div className={styles.tecnologia}>CSS3</div>
          </div>

          <div className={styles.item}>
            <div>
              <Image width={42} height={42} priority src="/img/javascript.svg" alt="Javascript" />
            </div>
            <div className={styles.tecnologia}>Javascript</div>
          </div>
          <div className={styles.item}>
            <div>
              <Image width={42} height={42} priority src="/img/react.svg" alt="React" />
            </div>
            <div className={styles.tecnologia}>React.js</div>
          </div>
          <div className={styles.item}>
            <svg fill="#fff" height="34" viewBox="0 0 48 48" width="34">
              <path d="M22.428.013c-.103.01-.431.042-.727.066C14.883.693 8.497 4.37 4.453 10.024A23.754 23.754 0 0 0 .216 20.51C.023 21.828 0 22.217 0 24.005c0 1.787.023 2.177.216 3.495 1.304 9.012 7.718 16.584 16.417 19.39 1.558.501 3.2.844 5.068 1.05.727.08 3.87.08 4.598 0 3.224-.356 5.954-1.154 8.648-2.529.412-.21.492-.267.436-.314-.038-.028-1.797-2.388-3.909-5.24l-3.838-5.184-4.809-7.117c-2.646-3.913-4.824-7.112-4.842-7.112-.019-.005-.038 3.157-.047 7.018-.014 6.76-.019 7.033-.103 7.192-.122.23-.216.324-.413.427-.15.075-.282.09-.99.09h-.812l-.216-.137a.878.878 0 0 1-.314-.342l-.099-.211.01-9.407.014-9.41.145-.184c.075-.098.235-.225.347-.286.193-.094.268-.103 1.08-.103.957 0 1.116.038 1.365.31.07.075 2.674 3.997 5.79 8.721s7.376 11.175 9.469 14.342l3.8 5.756.192-.127c1.704-1.107 3.505-2.683 4.932-4.325a23.888 23.888 0 0 0 5.65-12.268c.192-1.319.215-1.708.215-3.495 0-1.788-.023-2.177-.216-3.495-1.304-9.013-7.718-16.584-16.417-19.39C29.832.623 28.199.28 26.369.074c-.45-.047-3.551-.099-3.94-.061zm9.825 14.515a.947.947 0 0 1 .474.554c.038.122.047 2.73.038 8.608l-.014 8.436-1.488-2.28-1.492-2.28v-6.132c0-3.964.019-6.193.047-6.3a.957.957 0 0 1 .465-.592c.192-.098.262-.108 1-.108.694 0 .816.01.97.094z"></path>
            </svg>
            <div className={styles.tecnologia}>Next.js</div>
          </div>

          <div className={styles.item}>
            <div>
              <Image width={42} height={42} priority src="/img/git.svg" alt="git" />
            </div>
            <div className={styles.tecnologia}>Git</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tecnologias;
