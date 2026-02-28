let leads = [];

const saveLead = (req, res) => {
  const { name, email, phone, course, qualification } = req.body;

  if (!name || !email) {
    return res.status(400).json({ status: "error", message: "Name and email are required." });
  }

  leads.push({ name, email, phone, course, qualification, date: new Date() });
  res.json({ status: "success", message: "Lead saved successfully!" });
};

const getLeads = (req, res) => {
  res.json({ leads });
};

module.exports = { saveLead, getLeads };
