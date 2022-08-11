import React from 'react';
import { Page } from '../../lib/markdown';
import { PrintMarkdown } from '../markdown/printMarkdown';
import styles from './ProfesniProfil.module.scss';

const expertMarkdown = `
## Profesní zaměření

**Expert…**

na tvorbu architektury lidských procesů s důrazem na finanční efektivnost, vysokou kvalitu a datový monitoring.
`.trim();

const preferencesMarkdown = `
## Preference projektů

**S velkým nadšením**

 bych ráda vložila své schopnosti, dovednosti a znalosti do služeb projektů, které vyvíjejí technologii s cílem plně automatizovat lidské procesy a zefektivnit, operativně koordinovat nebo monitorovat koncovou kvalitu a bezpečnost. 

A také do projektů, kde je zapotřebí vymýšlet koncepty úplně nové nebo zefektivnit ty stávající a  potřebné změny rovnou implementovat v praxi, včetně následného monitoringu a identifikace dalších klíčových úprav s ohledem na výsledné metriky. 
`.trim();

const roleMarkdown = `
## Role v týmu

**Analytický typ**, který rád sází na dobře promyšlenou strategii.

**Řešitel komplexních problémů**, kde je mnoho složitých souvislostí.

**Konstruktivní typ**  se silnou touhou vylepšovat dosavadní koncepty, které jsou logicky děravé nebo časově neefektivní.

**Dobíječ** pozitivního odhodlání s chutí vydržet nezbytné pracovní vypětí, dokud není dosaženo stanoveného výsledku.

**Konektor** s přirozeným citem identifikovat, stimulovat a propojit pracovní potenciál jak mezi jednotlivci, tak i vůči novým příležitostem.
 
`.trim();

const leaderShipMarkdown = `
## Vedoucí styl

**Orientovaný** na týmovou soudržnost a uctivé mezilidské vztahy.

**Důraz** na efektivní postup při realizaci pracovních činností.

**Proaktivní** stimulace kolegů s cílem vznítit vnitřní chuť dosahovat nadstandardních výsledků.

**Podporující** otevřený dialog napříč týmem, kde se cení konstruktivní debata a svoboda názoru.

**Za všech okolností poctivý** ve svých úmyslech a jednání vůči druhým lidem i organizaci.

`.trim();

interface Props {
  page: Page
}

export const ProfesniProfil: React.FC<Props> = () => (
  <div>
    <div className={styles.container}>
      <div className={`${styles.block} ${styles.block__content} ${styles['block--yellow']}`}>
        <PrintMarkdown markdown={expertMarkdown} />
      </div>
      <div className={`${styles.block} ${styles.block__image} ${styles['block__image--data']}`}> </div>
    </div>
    <div className={styles.container}>
      <div className={`${styles.block} ${styles.block__content} ${styles['block--white']}`}>
        <PrintMarkdown markdown={preferencesMarkdown} />
      </div>
      <div className={`${styles.block} ${styles.block__image} ${styles['block__image--pc']}`}> </div>
    </div>
    <div className={styles.container}>
      <div className={`${styles.block} ${styles.block__content} ${styles['block--yellow']}`}>
        <PrintMarkdown markdown={roleMarkdown} />
      </div>
      <div className={`${styles.block} ${styles.block__image} ${styles['block__image--team']}`}> </div>
    </div>
    <div className={styles.container}>
      <div className={`${styles.block} ${styles.block__content} ${styles['block--white']}`}>
        <PrintMarkdown markdown={leaderShipMarkdown} />
      </div>
      <div className={`${styles.block} ${styles.block__image} ${styles['block__image--ia']}`}> </div>
    </div>
  </div>
);
