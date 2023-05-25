import { UnauthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId !== resourceUserId.toString()) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }
  return;
};

export default checkPermissions;
