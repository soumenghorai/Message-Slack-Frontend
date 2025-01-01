import { useMutation } from "@tanstack/react-query";

import { SignInRequest } from "@/api/auth";
import { useToast } from "@/hooks/use-toast";

export const useSignin = () => {
  const { toast } = useToast();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: SignInRequest,
    onSuccess: (response) => {
      console.log("Successfully signed in", response);

      const userObject = JSON.stringify(response.data);
      localStorage.setItem("user", userObject);
      localStorage.setItem("token", response.data.token);

      toast({
        title: "Signed up successfully",
        message: "You will be redirected to the home page in a few seconds",
        type: "success",
      });
    },
    onError: (error) => {
      console.error("Failed to sign in", error);
      toast({
        title: "Failed to sign in",
        message: error.message,
        type: "error",
        variant: "destructive",
      });
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signinMutation,
  };
};
