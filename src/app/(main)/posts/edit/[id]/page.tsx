"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BackButton from "@/components/BackButton";
import React from "react";
import posts from "@/data/posts";
import { notFound } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required"
  }),
  body: z.string().min(1, {
    message: "Body is required"
  }),
  author: z.string().min(1, {
    message: "Author is required"
  }),
  date: z.string().min(1, {
    message: "Date is required"
  })
});

interface Props {
  params: {
    id: string;
  };
}

const PostsEditPage: React.FC<Props> = ({ params }) => {
  const { toast } = useToast();

  const post = posts.find((post) => post.id === params.id);
  if (!post) {
    notFound();
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post.title,
      body: post.body,
      author: post.author,
      date: post.date
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Post has been updated successfully",
      description: `Updated by ${post?.author} on ${post?.date}`,
      duration: 2000
    });
  };
  return (
    <>
      <BackButton text="Back To Posts" link="/posts" />
      <h3 className="text-2xl mb-4">Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white dark:text-secondary/70">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white dark:text-secondary/70">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Body"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white dark:text-secondary/70">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Author"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white dark:text-secondary/70">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full dark:bg-slate-800 dark:text-white">
            Update Post
          </Button>
        </form>
      </Form>
    </>
  );
};

export default PostsEditPage;
