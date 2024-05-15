import Infobox from './Infobox';

export default function ReadyToRent() {
  return (
    <div className="pt-8 sm:pt-12 lg:py-48">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <Infobox
          title="For Renters"
          description="Find your dream rental property. Bookmark properties and contact owners."
          buttonInfo={{ text: 'Browse Properties', href: '/properties' }}
        />
        <Infobox
          title="For Property Owners"
          description="List your properties and reach potential tenants."
          backgroundColor="bg-rose-100"
          buttonInfo={{
            text: 'Add Property',
            href: '/property/add',
            backgroundColor: 'bg-rose-500',
          }}
        />
      </div>
    </div>
  );
}
