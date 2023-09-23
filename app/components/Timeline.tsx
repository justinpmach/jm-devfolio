const experience = [
  {
    id: 'tw-fe',
    company: 'Trust & Will',
    title: 'Frontend Engineer',
    date: 'Jan 2021 - Jan 2023',
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
    <div className='h-full'>
      {experience &&
        experience.map(item => (
          <div
            key={item.id}
            className="relative h-80 after:flex after:justify-center after:content-[''] after:absolute after:top-0 after:w-1 after:bg-white after:h-full after:left-[50%] after:-ml-[2px] hover:opacity-100 opacity-50 transition-all"
          >
            <div
              className="relative w-full flex items-start justify-center after:content-[''] after:absolute after:w-3 after:h-3  after:bg-white after:border after:border-dark-gray after:shadow-lg
            after:rounded-full after:z-10 "
            >
              <div className='w-[50%] absolute left-[50%] p-4'>
                <div className='flex'>
                  <div className='w-1/5'>{item.date}</div>
                  <div className='w-4/5 flex flex-col bg-gray-50 shadow-md rounded-md py-4 px-8'>
                    <span className='text-xl text-dark-gray tracking-tight mb-3'>
                      {item.title} &#x2022; {item.company}
                    </span>
                    <span className='text-md text-dark-gray tracking-wide'>
                      {item.title}
                    </span>
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
