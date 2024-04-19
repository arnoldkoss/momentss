import { rest } from "msw";

const baseURL = "https://drf-appi-ecb8a38b4305.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
      return res(
        ctx.json({
            pk: 1,
            username: "arnold",
            email: "arnold@gmail.com",
            first_name: "",
            last_name: "",
            profile_id: 1,
            profile_image: "https://res.cloudinary.com/dt2tgvarq/image/upload/v1/media/images/Screenshot_2024-02-04_181231_icbmwz",
        })
      );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
      return res(ctx.status(200));
    }),
  ];