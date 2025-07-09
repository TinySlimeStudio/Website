"use client"
import {
  useState
} from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import {
  z
} from "zod"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  Textarea
} from "@/components/ui/textarea"
import {
  Checkbox
} from "@/components/ui/checkbox"
import { Icon } from "@iconify/react/dist/iconify.js"

const formSchema = z.object({
  Name: z.string().min(1).min(2).max(64),
  Discord_name: z.string().min(1).min(2).max(32),
  Email: z.string().optional(),
  Asset: z.string(),
  Unity_Version: z.string(),
  Topic: z.string().min(1).min(2).max(256),
  Description: z.string().min(2).max(2048),
  Agrre: z.boolean()
});

export default function ContactForm() {

  const [] = useState < File[] | null > (null);

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 max-w-3xl mx-auto">
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="Discord_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discord Name</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="email"
                {...field} />
              </FormControl>
              <FormDescription className="text-xs text-muted-foreground">Just fill in how you want to receive the answer by email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="Asset"
          render={({ field }) => (
            <FormItem >
              <FormLabel>Asset</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="w-full">
                  <SelectItem value="HellishBattle">Hellish Battle</SelectItem>
                  <SelectItem value="MeetAndTalkPro">Meet and Talk Pro Version</SelectItem>
                  <SelectItem value="MeetAndTalkFree">Meet and Talk Free Version</SelectItem>
                  <SelectItem value="LootTable">Loot Table</SelectItem>
                  <SelectItem value="DrawTheLine">Draw The Line</SelectItem>
                  <SelectItem value="ClimateManagerPro">Climate Manager Pro</SelectItem>
                  <SelectItem value="AvatarCreator">Avatar Creator</SelectItem>
                </SelectContent>
                </Select>
                
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="Unity_Version"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unity Version</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="w-full">
                  <SelectItem value="2021.3">Unity 2021.3.x</SelectItem>
                  <SelectItem value="2022.1">Unity 2022.1.x</SelectItem>
                  <SelectItem value="2022.2">Unity 2022.2.x</SelectItem>
                  <SelectItem value="2022.3">Unity 2022.3.x</SelectItem>
                  <SelectItem value="2023.1">Unity 2023.1.x</SelectItem>
                  <SelectItem value="2023.2">Unity 2023.2.x</SelectItem>
                  <SelectItem value="6000.0">Unity 6.0 (6000.0.x)</SelectItem>
                  <SelectItem value="6000.1">Unity 6.1 (6000.1.x)</SelectItem>
                  <SelectItem value="6000.2">Unity 6.2 (6000.2.x)</SelectItem>
                </SelectContent>
              </Select>
                
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="Topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="Description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="Agrre"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I agree to share the provided data</FormLabel>
                <FormDescription className="text-xs text-muted-foreground">The entered data will be sent to <b>Tiny Slime Studio</b>, and only to them :)</FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="w-40">
            <Icon icon="mynaui:send-solid" />
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}