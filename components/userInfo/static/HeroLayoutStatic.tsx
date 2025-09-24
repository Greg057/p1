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
      icon: string
      title: string
      url: string
    }>
  }
}


export default function HeroLayoutStatic({ personal }: StaticPersonalData) {
  return (
    <div className="max-w-4xl mx-auto mb-28">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 items-center md:items-start">
        {personal.avatarUrl && (
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <Avatar className="w-24 h-24 md:w-32 md:h-32">
              <AvatarImage src={personal.avatarUrl || undefined} alt={personal.full_name || ''} />
              <AvatarFallback>{(personal.full_name || '').split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </div>
        )}

        <div className="md:col-span-2 flex flex-col text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">{personal.full_name}</h1>
          {personal.title && (
            <p className="text-xl text-muted-foreground mb-4">{personal.title}</p>
          )}
          {personal.location && (
            <p className="text-muted-foreground mb-4">{personal.location}</p>
          )}

          {personal.about_me && (
            <div className="mb-6">
              <p className="text-muted-foreground leading-relaxed">{personal.about_me}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {personal.custom_links?.find(link => link.icon === 'email') && (
              <Button variant="outline" size="sm" asChild>
                <a href={`mailto:${personal.custom_links.find(link => link.icon === 'email')?.url}`} aria-label="Email">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
            )}
            {personal.cvUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={personal.cvUrl} target="_blank" rel="noopener noreferrer" aria-label="View CV">
                  <FileDown className="mr-2 w-4 h-4" />
                  Resume
                </a>
              </Button>
            )}
            {personal.custom_links?.filter(link => link.icon !== 'email').map((link, index) => (
              <Button key={index} variant="outline" size="sm" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer" title={link.title}>
                  {renderIcon(link.icon, 'mr-2')}
                  {link.title}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}