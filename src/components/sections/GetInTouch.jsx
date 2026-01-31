import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useState } from "react";
import { CONTACT_DETAILS } from "../../constants/constant";

export default function GetInTouch() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-green-400" />,
      title: "Email",
      details: CONTACT_DETAILS.email,
      subtext: "Typically replies within 24 hours",
    },
    {
      icon: <Phone className="h-5 w-5 text-green-400" />,
      title: "Phone",
      details: CONTACT_DETAILS.phone,
      subtext: "Mon–Sat from 9am to 6pm",
    },
    {
      icon: <MapPin className="h-5 w-5 text-green-400" />,
      title: "Office",
      details: CONTACT_DETAILS.address,
      subtext: "Schedule an in-person meeting",
    },
    {
      icon: <Clock className="h-5 w-5 text-green-400" />,
      title: "Response Time",
      details: "< 4 hours",
      subtext: "For urgent inquiries",
    },
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
      {/* Header */}
      <BlurFade delay={0.1} inView>
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-xs tracking-wide mb-4">
            <MessageSquare className="h-4 w-4" />
            GET IN TOUCH
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Let’s Talk About Your Project
          </h2>

          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Connect with our experts to explore how INTEGRA 360 can drive
            efficiency, visibility, and measurable business outcomes.
          </p>
        </div>
      </BlurFade>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Contact Info */}
        <BlurFade delay={0.2} inView className="lg:col-span-1">
          <div className="space-y-5">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl border border-white/20 bg-white/5"
              >
                <div className="p-2 rounded-lg ">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {info.title}
                  </h4>
                  <p className="text-sm text-white/90 mt-1">{info.details}</p>
                  <p className="text-xs text-gray-400 mt-1">{info.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Contact Form */}
        <BlurFade delay={0.3} inView className="lg:col-span-2">
          <Card className="bg-transparent border border-white/20 shadow-xl rounded-2xl">
            <CardContent className="p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-gray-300">
                    Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Send us a message
                    </h3>
                    <p className="text-sm text-gray-300">
                      We usually respond within a few hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="text-white bg-transparent"
                      />
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="text-white bg-transparent"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="text-white bg-transparent"
                      />
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="text-white bg-transparent"
                      />
                    </div>

                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                      className="text-white bg-transparent resize-none"
                    />

                    <div className="flex justify-end pt-2">
                      <Button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-5 text-sm font-medium"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </div>
  );
}
