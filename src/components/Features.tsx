import { Mail, Users, BarChart, Layout, Bot, Zap } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Email & SMS Marketing",
    description: "Powerful email and SMS campaigns with high conversion rates.",
  },
  {
    icon: Users,
    title: "Community Platform",
    description: "Build and manage your community with gamification features.",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Track and analyze your data for better decision making.",
  },
  {
    icon: Layout,
    title: "Page Builder",
    description: "Create beautiful pages and sites with our drag-and-drop builder.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Leverage AI to automate and optimize your marketing.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Lightning-fast loading times and reliable infrastructure.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-400">
            One platform for all your marketing and sales needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};