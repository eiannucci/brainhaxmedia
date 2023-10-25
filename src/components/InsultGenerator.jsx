import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import ReactGA from 'react-ga';

import styles from "../scss/InsultGenerator.module.scss";
import '../scss/FontFace.module.scss';

export const ShakespeareanInsults = () => {
  const [insult, setInsult] = useState('');

  const generateInsult = () => {
    const pronouns = ['Thou', 'Ye', 'Thy'];
    const adjectives = ['artless', 'bawdy', 'beslubbering', 'bootless', 'churlish', 'cockered', 'clouted', 'craven', 'currish', 'dankish', 'dissembling', 'droning', 'errant', 'fawning', 'fobbing', 'froward', 'frothy', 'gleeking', 'goatish', 'gorbellied', 'impertinent', 'infectious', 'jarring', 'loggerheaded', 'lumpish', 'mammering', 'mangled', 'mewling', 'paunchy', 'pribbling', 'puking', 'puny', 'qualling', 'rank', 'reeky', 'roguish', 'ruttish', 'saucy', 'spleeny', 'spongy', 'surly', 'tottering', 'unmuzzled', 'vain', 'venomed', 'villainous', 'warped', 'wayward', 'weedy', 'yeasty'];
    const nouns = ['base-court', 'bat-fowling', 'beef-witted', 'beetle-headed', 'boil-brained', 'clapper-clawed', 'clay-brained', 'common-kissing', 'crook-pated', 'dismal-dreaming', 'dizzy-eyed', 'doghearted', 'dread-bolted', 'earth-vexing', 'elf-skinned', 'fat-kidneyed', 'fen-sucked', 'flap-mouthed', 'fly-bitten', 'folly-fallen', 'fool-born', 'full-gorged', 'guts-griping', 'half-faced', 'hasty-witted', 'hedge-born', 'hell-hated', 'idle-headed', 'ill-breeding', 'ill-nurtured', 'knotty-pated', 'milk-livered', 'motley-minded', 'onion-eyed', 'plume-plucked', 'pottle-deep', 'pox-marked', 'reeling-ripe', 'rough-hewn', 'rude-growing', 'rump-fed', 'shard-borne', 'sheep-biting', 'spur-galled', 'swag-bellied', 'tardy-gaited', 'tickle-brained', 'toad-spotted', 'unchin-snouted', 'weather-bitten'];
    const colorfulWords = ['apple-john', 'baggage', 'barnacle', 'bladder', 'boar-pig', 'bugbear', 'bum-bailey', 'canker-blossom', 'clack-dish', 'clotpole', 'coxcomb', 'codpiece', 'death-token', 'dewberry', 'flap-dragon', 'flax-wench', 'flirt-gill', 'foot-licker', 'fustilarian', 'giglet', 'gudgeon', 'haggard', 'harpy', 'hedge-pig', 'horn-beast', 'hugger-mugger', 'joithead', 'lewdster', 'lout', 'maggot-pie', 'malt-worm'];

    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
    const firstWord = getRandomItem(pronouns);
    const secondWord = getRandomItem(adjectives);
    const thirdWord = getRandomItem(nouns);
    const fourthWord = getRandomItem(colorfulWords);
    const newInsult = `${firstWord} ${secondWord}, ${thirdWord} ${fourthWord}!`;

    // Change button text to "Insult me again"
    const insultBtnText = document.querySelector('.insult-btn-text');
    insultBtnText.textContent = 'Insult me again!';
    setInsult(newInsult);
  };

  useEffect(() => {
    ReactGA.initialize('G-SSE6730X77');
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA);
  }, []);

  return (
    <Container fluid className={styles['rel-container']}>
      <Row>
        <Col><p>Insult thyself, in Shakespearean form...</p></Col>
      </Row>
      <Row>
        <Col className={classNames(styles["button-container"])}>
          <button onClick={generateInsult} className={classNames(styles.btn, styles["insult-btn"])}><span className='insult-btn-text'><span className={styles['btn-inner-txt']}>Generate Insult</span></span></button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='insult-text-container'> <p className={styles['insult-text']}>{insult}</p></div>
        </Col>
      </Row>
    </Container>
  );
};