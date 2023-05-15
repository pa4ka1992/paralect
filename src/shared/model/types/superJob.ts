export type Authorization = {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
  reg_user_resumes_count: number;
};

export interface IVacancy {
  id: number;
  profession: string;
  firm_name: string;
  town: {
    title: string;
  };
  type_of_work: {
    title: string;
  };
  payment_to: number;
  payment_from: number;
  currency: number;
  vacancyRichText: string;
}

export interface ICatalogue {
  key: number;
  title: string;
}
