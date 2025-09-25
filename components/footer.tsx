export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">RN</span>
              </div>
              <span className="font-bold text-lg">ReachOut Nigeria</span>
            </div>
            <p className="text-muted-foreground text-sm text-pretty">
              A Christ Embassy initiative taking God's Word through Rhapsody of Realities to every home, community, and
              state across Nigeria.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Campaign</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About ReachOut
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Church Participation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ministry Impact Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ministry Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Report Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Church Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Christ Embassy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  ReachOut World
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ministry Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 ReachOut Nigeria Campaign - Christ Embassy. Transforming lives through God's Word, one community
            at a time.
          </p>
        </div>
      </div>
    </footer>
  )
}
