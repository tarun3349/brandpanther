import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdminSettings } from "@/context/AdminContext";
import { useToast } from "@/hooks/use-toast";

const settingsSchema = z.object({
  logoMarkUrl: z.string().optional(),
  logoWordmarkUrl: z.string().optional(),
  logoSize: z.number().min(50, "Minimum size is 50%").max(200, "Maximum size is 200%"),
  logoSizeMobile: z.number().min(50, "Minimum size is 50%").max(200, "Maximum size is 200%"),
  logoWordmarkSize: z.number().min(50, "Minimum size is 50%").max(400, "Maximum size is 400%"),
  logoWordmarkSizeMobile: z.number().min(50, "Minimum size is 50%").max(500, "Maximum size is 500%"),
  logoGap: z.number().min(0, "Minimum gap is 0px").max(200, "Maximum gap is 200px"),
  companyName: z.string().min(1, "Company name is required").max(100),
  heroHeadline: z.string().min(1, "Hero headline is required").max(500),
  heroSubheading: z.string().min(1, "Hero subheading is required").max(500),
  ctaButtonText: z.string().min(1, "CTA button text is required").max(100),
  aboutHeadline: z.string().min(1, "About headline is required").max(500),
  aboutDescription: z.string().min(1, "About description is required").max(1000),
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

const AdminPage = () => {
  const { settings, updateSettings, resetSettings } = useAdminSettings();
  const { toast } = useToast();

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: settings,
    mode: "onTouched",
  });

  useEffect(() => {
    form.reset(settings);
  }, [settings]);

  const onSubmit = (values: SettingsFormValues) => {
    updateSettings(values);
    toast({
      title: "Success",
      description: "Settings have been updated successfully!",
    });
  };

  const handleReset = () => {
    resetSettings();
    toast({
      title: "Reset",
      description: "Settings have been reset to defaults.",
    });
  };

  return (
    <div className="min-h-screen bg-background pt-40">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <p className="mt-2 text-muted-foreground">Manage website content and settings</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Logo Section */}
            <Card>
              <CardHeader>
                <CardTitle>Logo Settings</CardTitle>
                <CardDescription>Adjust logo sizes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="logoSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Desktop Logo Mark Size: {field.value}%</FormLabel>
                        <FormControl>
                          <Slider
                            min={50}
                            max={200}
                            step={5}
                            value={[Number(field.value)]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="w-full"
                          />
                        </FormControl>
                        <FormDescription>Desktop logo mark scale from 50% to 200% (default: 100%)</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="logoSizeMobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Logo Mark Size: {field.value}%</FormLabel>
                        <FormControl>
                          <Slider
                            min={50}
                            max={200}
                            step={5}
                            value={[Number(field.value)]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="w-full"
                          />
                        </FormControl>
                        <FormDescription>Mobile logo mark scale from 50% to 200% (default: 100%)</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="logoWordmarkSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Desktop Logo Wordmark Size: {field.value}%</FormLabel>
                        <FormControl>
                          <Slider
                            min={50}
                            max={500}
                            step={5}
                            value={[Number(field.value)]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="w-full"
                          />
                        </FormControl>
                        <FormDescription>Desktop logo wordmark scale from 50% to 400% (default: 400%)</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="logoWordmarkSizeMobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Logo Wordmark Size: {field.value}%</FormLabel>
                        <FormControl>
                          <Slider
                            min={50}
                            max={400}
                            step={5}
                            value={[Number(field.value)]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="w-full"
                          />
                        </FormControl>
                        <FormDescription>Mobile wordmark scale from 50% to 500% (default: 500%)</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="logoGap"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gap Between Logos: {field.value}px</FormLabel>
                      <FormControl>
                        <Slider
                          min={0}
                          max={200}
                          step={4}
                          value={[Number(field.value)]}
                          onValueChange={(value) => field.onChange(value[0])}
                          className="w-full"
                        />
                      </FormControl>
                      <FormDescription>Adjust spacing between logo mark and wordmark from 0px to 200px (default: 48px)</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Logo Preview */}
                <div className="mt-8 space-y-4">
                  <h3 className="font-semibold text-lg">Logo Preview</h3>
                  <p className="text-sm text-muted-foreground">See how your logo sizes appear on desktop and mobile</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-border bg-muted/50 p-6">
                      <h4 className="mb-4 text-sm font-semibold">Desktop Preview</h4>
                      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-border bg-background/80 p-6" style={{ gap: `${form.watch("logoGap")}px` }}>
                        <div className="flex flex-col items-center justify-center gap-3">
                          <p className="text-xs text-muted-foreground">Logo Mark</p>
                          <img
                            src={form.watch("logoMarkUrl")}
                            alt="Logo mark preview"
                            className="h-24 w-24 object-contain"
                            style={{ transform: `scale(${form.watch("logoSize") / 100})`, transformOrigin: 'center' }}
                          />
                        </div>
                        <div className="h-24 w-px bg-border" />
                        <div className="flex flex-col items-center justify-center gap-3">
                          <p className="text-xs text-muted-foreground">Logo Wordmark</p>
                          <img
                            src={form.watch("logoWordmarkUrl")}
                            alt="Logo wordmark preview"
                            className="h-12 max-w-xs object-contain"
                            style={{ transform: `scale(${form.watch("logoWordmarkSize") / 100})`, transformOrigin: 'center' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-border bg-muted/50 p-6">
                      <h4 className="mb-4 text-sm font-semibold">Mobile Preview</h4>
                      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-border bg-background/80 p-6" style={{ gap: `${form.watch("logoGap")}px` }}>
                        <div className="flex flex-col items-center justify-center gap-3">
                          <p className="text-xs text-muted-foreground">Logo Mark</p>
                          <img
                            src={form.watch("logoMarkUrl")}
                            alt="Logo mark preview"
                            className="h-20 w-20 object-contain"
                            style={{ transform: `scale(${form.watch("logoSizeMobile") / 100})`, transformOrigin: 'center' }}
                          />
                        </div>
                        <div className="h-24 w-px bg-border" />
                        <div className="flex flex-col items-center justify-center gap-3">
                          <p className="text-xs text-muted-foreground">Logo Wordmark</p>
                          <img
                            src={form.watch("logoWordmarkUrl")}
                            alt="Logo wordmark preview"
                            className="h-10 max-w-xs object-contain"
                            style={{ transform: `scale(${form.watch("logoWordmarkSizeMobile") / 100})`, transformOrigin: 'center' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Info Section */}
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
                <CardDescription>Basic company details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Brand Panther" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Hero Section */}
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>Customize the main landing section</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="heroHeadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hero Headline</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter hero headline (use \n for line breaks)" rows={4} {...field} />
                      </FormControl>
                      <FormDescription>Main headline displayed on hero section</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="heroSubheading"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hero Subheading</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter hero subheading" rows={3} {...field} />
                      </FormControl>
                      <FormDescription>Supporting text under the headline</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ctaButtonText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CTA Button Text</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Let's Grow Together" {...field} />
                      </FormControl>
                      <FormDescription>Text on the main call-to-action button</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About Section</CardTitle>
                <CardDescription>Customize the about section content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="aboutHeadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>About Headline</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter about headline" rows={3} {...field} />
                      </FormControl>
                      <FormDescription>Main headline for about section</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="aboutDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>About Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter about description" rows={4} {...field} />
                      </FormControl>
                      <FormDescription>Supporting text for about section</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button type="submit" size="lg" className="flex-1">
                Save Changes
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleReset}
                className="flex-1"
              >
                Reset to Defaults
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AdminPage;
