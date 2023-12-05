const experience = [
  {
    id: 'tw-fe',
    company: 'Trust & Will',
    title: 'Frontend Engineer',
    date: 'Nov 2021 - Jan 2023',
    subtext1:
      'Maintained and improved Angular application while simultaneously assisting in a large-scale transition to React and Tailwind',
    subtext2:
      'Played a key role in implementing numerous successful A/B tests, leading to revenue increase and operational savings',
    subtext3:
      'Led the successful redesign of the core product application, increasing user experience and delivering a fresh, well-received look',
    subtext4: '',
  },
  {
    id: 'tw-qa',
    company: 'Trust & Will',
    title: 'QA Engineer',
    date: 'Jan 2021 - Nov 2021',
    subtext1:
      ' Developed a bug tracker and reporter for company-wide use via Slack workflows, creating tickets in Jira via Zappier',
    subtext2:
      'Started as a QA Engineer, quickly transitioning to a dual role that included Front End Developer responsibilities within three months',
    subtext3:
      'Assisted the Member Services team in resolving bugs, providing large-scale and individual-level solutions for immediate clients',
    subtext4:
      'Worked closely with the Advisors team to maintain and enhance the advisor dashboard, a critical revenue source for the company',
  },
  // Developed a bug tracker and reporter for company-wide use via Slack workflows, creating tickets in Jira via Zappier
  // Started as a QA Engineer, quickly transitioning to a dual role that included Front End Developer responsibilities within three months
  // Assisted the Member Services team in resolving bugs, providing large-scale and individual-level solutions for immediate clients
  // Worked closely with the Advisors team to maintain and enhance the advisor dashboard, a critical revenue source for the company
];

export default function Timeline() {
  return (
    <div className=''>
      {experience &&
        experience.map(item => (
          <div
            key={item.id}
            className="relative h-76 lg:h-80 after:flex xl:after:justify-center xl:after:content-[''] xl:after:absolute xl:after:top-0 xl:after:w-1 xl:after:bg-white after:h-full xl:after:left-[50%] after:-ml-[2px] lg:hover:opacity-100 lg:opacity-50 transition-all"
          >
            <div className="relative w-full flex items-start justify-center xl:after:content-[''] xl:after:absolute xl:after:w-3 xl:after:h-3 xl:after:bg-white xl:after:border xl:after:border-dark-gray after:shadow-lg xl:after:rounded-full xl:after:z-10">
              <div className='xl:w-[50%] xl:absolute xl:left-[50%] p-4'>
                <div className='flex flex-col lg:flex-row'>
                  <div className='lg:w-1/5 text-gray-550'>{item.date}</div>
                  <div className='lg:w-4/5 flex flex-col bg-gray-50 text-gray-550 shadow-md rounded-md py-4 px-8'>
                    <span className='text-xl tracking-tight mb-3'>
                      {item.title} &#x2022; {item.company}
                    </span>
                    <span className='text-md tracking-wide'>{item.title}</span>
                    <ul className='list-disc'>
                      <li className='text-sm mb-2'>{item.subtext1}</li>
                      <li className='text-sm mb-2'>{item.subtext2}</li>
                      <li className='text-sm mb-2'>{item.subtext3}</li>
                      {item.subtext4 && (
                        <li className='text-sm'>{item.subtext4}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
