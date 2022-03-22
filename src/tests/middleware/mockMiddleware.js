const mockReq = {};
const mockRes = {};
const nextFx = jest.fn();

mockRes.json = jest.fn().mockReturnValue(mockRes);
mockRes.status = jest.fn().mockReturnValue(mockRes);

export { mockReq,mockRes,nextFx };