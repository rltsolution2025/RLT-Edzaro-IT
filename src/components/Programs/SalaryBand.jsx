import { Container, Badge } from "react-bootstrap";

const SalaryBand = ({ range }) => {
  if (!range) return null;

  return (
    <section className="text-center py-4 bg-light">
      <Container>
        <h3 className="fw-bold mb-3">Career Outcomes</h3>
        <Badge bg="success" className="p-3 fs-5">
          Expected Salary Range: {range}
        </Badge>
      </Container>
    </section>
  );
};

export default SalaryBand;
