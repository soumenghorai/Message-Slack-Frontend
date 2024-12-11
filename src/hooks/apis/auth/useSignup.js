import { useMutation } from "@tanstack/react-query";

import { SignUpRequest } from "@/api/auth";

export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: SignUpRequest,
    onSuccess: (data) => {
      console.log("Successfully signed up", data);
    },
    onError: (error) => {
      console.error("Failed to sign up", error);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signupMutation,
  };
};
