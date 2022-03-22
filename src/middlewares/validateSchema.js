const validateSchema = (schema) => async (req, res, next) => {
  const resource = req.body;
  try {
    await schema.validate(resource);
    next();
  } catch (e) {
    return res.status(400).json({ error: e.errors.join(", ") });
  }
};

export default validateSchema;