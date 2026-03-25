import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { useSEO } from '../../hooks/useSEO';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  FileText,   
  TrendingUp,
  Building2,
  ShieldCheck,
  Rocket,
  Calculator,
  Loader2,
  Globe2, // newly imported
} from 'lucide-react';
import React from 'react';
import { client, urlFor } from '../../lib/sanityClient';
import { PortableText } from '@portabletext/react';

const categoryIcons: Record<string, any> = {
  'International Tax & Compliance': Globe2,
  'Foreign-Owned US Entities': Building2,
  'FBAR & FATCA': ShieldCheck,
  'Cross-Border Structures': Globe2,
  'Foreign Founder Essentials': Rocket,
  'US Business Tax': TrendingUp,
  'US Individual Tax': FileText,
  'Compliance & Filings': ShieldCheck,
  'Business Formation': Building2,
  'Bookkeeping & Finance': Calculator,
};

const portableTextComponents = {
  // ... rest of your PortableText components unchanged
};
