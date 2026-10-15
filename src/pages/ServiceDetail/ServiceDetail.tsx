import { Helmet } from 'react-helmet-async'
import { Navigate, useParams } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import ServiceBlock from '../../components/ServiceBlock/ServiceBlock'
import ServicesCta from '../../components/ServicesCta/ServicesCta'
import { getService, servicePath } from '../../data/services'

export default function ServiceDetail() {
  const { slug = '' } = useParams()
  const service = getService(slug)

  if (!service) {
    return <Navigate to="/sluzby" replace />
  }

  const url = `https://tesodavid.cz${servicePath(service)}`

  return (
    <>
      <Helmet>
        <title>{service.title} | TESO David</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={`${service.title} | TESO David`} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
      </Helmet>

      <Hero title={service.title} showCta={false} compact />

      <section className="py-20">
        <div className="container-custom">
          <ServiceBlock service={service} />
        </div>
      </section>

      <ServicesCta />
    </>
  )
}
