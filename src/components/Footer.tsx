const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-right justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Kaustubh Raut. All rights reserved.
          </p>
          {/* <p className="text-muted-foreground text-sm">
            Designed with passion in San Francisco
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
