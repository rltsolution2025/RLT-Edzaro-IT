import { Container, Accordion } from "react-bootstrap";

const FAQSection = ({ faq = [] }) => {
  if (!faq.length) return null;

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">FAQs</h2>
      <Accordion>
        {faq.map((f, i) => (
          <Accordion.Item eventKey={i.toString()} key={i}>
            <Accordion.Header>{f.q}</Accordion.Header>
            <Accordion.Body>{f.a}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQSection;
