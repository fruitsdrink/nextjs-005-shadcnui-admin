"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Please enter a valid email"
  }),
  password: z.string().min(1, { message: "Password is required" })
});

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    router.push("/");
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Log into your account with your credentials
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect={"off"}
                      placeholder="Enter Email"
                      {...field}
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter Password"
                      {...field}
                      className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full dark:bg-slate-800 dark:text-white">
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
