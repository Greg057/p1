"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, FileDown } from "lucide-react";
import { renderIcon } from "@/lib/hybrid-icon-resolver";

interface StaticPersonalData {
  personal: {
    full_name: string | null
    title: string | null
    about_me: string | null
    location: string | null
    avatarUrl: string | null
    cvUrl: string | null
    custom_links: Array<{
      icon: string      // Library key OR custom SVG data
      title: string
      url: string
    }>
  }
}

export default function MinimalProfileStatic({ personal }: StaticPersonalData) {
  return (
    <header className="text-center mb-28">
        {personal.avatarUrl && (
          <Avatar className="w-32 h-32 mx-auto mb-6">
            <AvatarImage src={personal.avatarUrl || undefined} alt={personal.full_name || ''} />
            <AvatarFallback>{(personal.full_name || '').split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        )}

        <h1 className="text-4xl font-bold mb-2">{personal.full_name}</h1>
        {personal.title && (
          <p className="text-xl text-muted-foreground mb-4">{personal.title}</p>
        )}
        {personal.location && (
          <p className="text-muted-foreground mb-4">{personal.location}</p>
        )}

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {personal.custom_links?.find(link => link.icon === 'email') && (
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${personal.custom_links.find(link => link.icon === 'email')?.url}`} aria-label="Email">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          )}

          {personal.cvUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={personal.cvUrl} target="_blank" rel="noopener noreferrer" aria-label="Download CV">
                <FileDown className="mr-2 w-4 h-4" />
                Resume
              </a>
            </Button>
          )}

          {personal.custom_links && personal.custom_links.length > 0 && personal.custom_links
            .filter(link => link.icon !== 'email') // Exclude email since we handle it separately
            .map((link, index) => (
              <Button key={index} variant="outline" size="sm" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer" title={link.title}>
                  {renderIcon(link.icon, 'mr-2')}
                  {link.title}
                </a>
              </Button>
            ))}
        </div>

        {personal.about_me && (
          <p className="text-center text-muted-foreground leading-relaxed">
            {personal.about_me}
          </p>
        )}
    </header>
  );
}