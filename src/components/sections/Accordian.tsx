import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = () => {
  return (
    <div className='faq'>
      <div>
        <h3>Have questions ?</h3>
        <h4 className='  font-semibold text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent'>
          Get answers.
        </h4>
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
