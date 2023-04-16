import { Typography } from "../../components/typography";

export const Footer = () => {
  return (
    <div className="py-[38px] px-[21px]" style={{ borderTop: '1px solid rgba(35,38,47,0.1)' }}>
      <Typography size={12} weight={500} className="mr-[35px]">@ 2022 Asset Reality. All right reserved</Typography>
    </div>
  )
};

