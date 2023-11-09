import Accordion from '../components/Accordion';

function AccordionPage() {

  const items = [
    {
      id: 1,
      label: "label 1",
      content: "this is a test for content 1, writing it longer to check dropdown box sizing etc"
    },
    {
      id: 2,
      label: "label 2",
      content: "this is a test for content 2, writing it longer to check dropdown box sizing etc"
    },
    {
      id: 3,
      label: "label 3",
      content: "this is a test for content 3, writing it longer to check dropdown box sizing etc"
    }
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
} 

export default AccordionPage;
