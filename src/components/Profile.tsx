import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/whoisandrade.png" alt="Imagem do perfil"/>
      <div>
        <strong>André Andrade Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Subir de nível"/>
          Level 1
        </p>
      </div>
    </div>
  );
}