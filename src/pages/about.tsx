import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'

import { ProfilePageQueryQuery } from '../../types/graphql-types'
import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'

interface Props {
  data: ProfilePageQueryQuery
  location: Location
}

const Profile: React.FC<Props> = ({ location, data }: Props) => {
  const profile = data.profile?.childImageSharp?.fixed
  const sponsors = data.sponsors?.childImageSharp?.fixed

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="About" />
      <div>
        <section className="text-center">
          <div className="container">
            <Img fixed={profile as FixedObject} className="rounded-circle" />
            <h1>Calgary Software Crafters</h1>
            <p className="lead text-muted">We are software developers who know that writing quality code comes from deliberate practice. We find that writing code together makes it more fun and better quality than going it alone. Our meetings include guest speakers and opportunities to practice new skills and hone old ones. We use Test Driven Development while coding in pairs to tackle short programming challenges, called katas. Whether you have a favourite programming language, IDE, OS, or testing framework, or you’re completely new to code, it doesn’t matter. If you bring your imagination, curiosity and a computer, you are welcome.</p>
            <div>
              <a
                href="https://twitter.com/crafterscalgary"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Follow @crafterscalgary
              </a>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container-center">
            <h1>Sponsors</h1>
            <Img fixed={sponsors as FixedObject} />
          </div>
        </section>
        <section className="text-center">
          <div className="container">
              <a href="https://www.coderetreat.org/resources/code-of-conduct/">
                <h1>Code of Conduct</h1>
              </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Profile

export const query = graphql`
  query ProfilePageQuery {
    profile: file(name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    sponsors: file(name: { eq: "calgary-software-crafters-sponsors" }) {
      childImageSharp {
        fixed(width: 960, height: 540) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }

  }
`
