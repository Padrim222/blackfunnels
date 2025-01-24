import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Business with <span className="text-primary">Black Funnels</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Focus on what you love instead of worrying about tools and technology. Get everything you need to succeed online in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="text-white text-lg">
            Learn More
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">100+</h3>
            <p className="text-gray-400">Templates</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">50k+</h3>
            <p className="text-gray-400">Users</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">99.9%</h3>
            <p className="text-gray-400">Uptime</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">24/7</h3>
            <p className="text-gray-400">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};