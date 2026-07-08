export const SLACK_WEBHOOK = import.meta.env.VITE_SLACK_WEBHOOK;

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.roadsidewingman.com/#organization',
      name: 'RoadsideWingman',
      url: 'https://www.roadsidewingman.com',
      description:
        'RoadsideWingman provides dedicated virtual assistants for tow truck companies, pre-trained on Towbook dispatch software.',
      foundingLocation: 'Philippines',
      areaServed: 'United States',
      serviceType: 'Virtual Assistant Services for Towing Companies',
    },
  ],
}
