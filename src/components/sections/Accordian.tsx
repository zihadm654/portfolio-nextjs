import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = () => {
  return (
    <div
      className='faq bg-[#f6f5f4] w-full
      rounded-5xl px-[6rem] py-6'
    >
      <div className='py-15 px-24 md:p-6 md:px-30'>
        <div className='text-4xl md:text-7xl font-bold text-black'>
          Have questions ?
        </div>
        <div className='  font-semibold text-5xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent'>
          Get answers.
        </div>
        <Accordion type='single' collapsible className='py-6'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>What is Bird?</AccordionTrigger>
            <AccordionContent className='text-3xl'>
              Bird is a full fledge marketing agency that specializes in
              branding, web design, and digital marketing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>How to start ?</AccordionTrigger>
            <AccordionContent className='text-3xl'>
              You can start by contacting us. We will get back to you within 24
              hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Pricing ?</AccordionTrigger>
            <AccordionContent className='text-3xl'>
              We offer custom tailored solutions for your business. Contact us
              to get a quote.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-4'>
            <AccordionTrigger>Support ?</AccordionTrigger>
            <AccordionContent className='text-3xl'>
              We offer Monday-Friday support for all our clients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
