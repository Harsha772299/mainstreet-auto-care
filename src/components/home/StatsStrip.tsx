export const StatsStrip = () => {
  return (
    <section className="bg-muted/30 py-8 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-heading font-bold text-primary">25+</p>
            <p className="text-sm text-muted-foreground">Years in Service</p>
          </div>
          <div className="hidden sm:block h-12 w-px bg-border" />
          <div>
            <p className="text-3xl font-heading font-bold text-primary">5,000+</p>
            <p className="text-sm text-muted-foreground">Repairs Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};
