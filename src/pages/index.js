import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [];

const codeString = `package main

import (
	"github.com/gogearbox/gearbox"
)

func main() {
	// Setup gearbox
	g := gearbox.New()

	// Define your handlers
	g.Get("/", func(ctx gearbox.Context) {
		ctx.SendString("Hello World!")
	})

	// Start service
	g.Start(":3000")
}
`;

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

Feature.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.isRequired,
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout description={siteConfig.tagline}>
      <header className={classnames('', styles.heroBanner)}>
        <div className={classnames('', styles.info)}>
          <img
            className={styles.featureImage}
            src="img/gearbox.png"
            alt="lgo"
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <Link
            className={classnames(
              'button button--solid button--primary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('docs/')}
          >
            Get Started
          </Link>
        </div>

        <div className={classnames('', styles.snippet)}>
          <CodeBlock>{codeString}</CodeBlock>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
