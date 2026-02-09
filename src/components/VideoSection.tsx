import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            See <span className="text-gradient">AlienGate</span> in Action
          </h2>
          <p className="text-muted-foreground">
            Watch how our platform protects organizations from cyber threats.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden border border-border shadow-card bg-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/aSte18D2_YE?autoplay=1&mute=1&loop=1&playlist=aSte18D2_YE&rel=0"
              title="AlienGate Demo"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
