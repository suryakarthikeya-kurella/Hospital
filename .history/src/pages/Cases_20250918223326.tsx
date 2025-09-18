import { useI18n } from '@/i18n/I18nProvider';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import vedios from '/vedios/about-bg.mp4';

const CASES = [
	{
		id: 'hydrafacial',
		title: 'HydraFacial',
		image: '/assets/gallery/Hydrafacial.png',
		description: 'Deep cleansing and hydration with visible glow and smoother texture.',
		treatment: 'HydraFacial protocol with cleansing, exfoliation, extraction and infusion.',
		note: 'Skin brightness and clarity improved after a series of sessions with proper home-care.',
	},
	{
		id: 'vitiligo',
		title: 'Vitiligo Surgery',
		image: '/assets/gallery/VitiligoSurgery.png',
		description: 'Targeted surgical approach for stable vitiligo patches.',
		treatment: 'Mini punch grafting / suction blister grafting based on site and stability.',
		note: 'Repigmentation observed with diligent phototherapy and sun protection.',
	},
	{
		id: 'nail',
		title: 'Nail Avulsion',
		image: '/assets/gallery/NailAvulsion.png',
		description: 'Safe removal for painful ingrown or damaged nails.',
		treatment: 'Partial/total nail avulsion with antiseptic dressing and after-care plan.',
		note: 'Pain relief achieved and normal nail growth supported with protective care.',
	},
	{
		id: 'earlobe',
		title: 'Earlobe Stitch',
		image: '/assets/gallery/EarlobeStitch.png',
		description: 'Repair of torn earlobe for an improved cosmetic outcome.',
		treatment: 'Local anesthesia repair with fine suturing and scar care guidance.',
		note: 'Cosmetic contour restored with minimal scar and timely suture removal.',
	},
	{
		id: 'cyst',
		title: 'Sebaceous Cyst Removal',
		image: '/assets/gallery/Sebaceouscystremoval.png',
		description: 'Excision of symptomatic cyst with complete capsule removal.',
		treatment: 'Minor surgical excision under aseptic precautions with wound care.',
		note: 'No recurrence on follow-up with proper post-procedure care.',
	},
	{
		id: 'prp',
		title: 'PRP and GFC',
		image: '/assets/gallery/PRPandGFC.png',
		description: 'Biologic therapies to support hair regrowth and scalp health.',
		treatment: 'PRP/GFC sessions at recommended intervals with adjunct medical therapy.',
		note: 'Thickness and density improved over cycles with lifestyle optimization.',
	},
	{
		id: 'laser',
		title: 'Laser Treatment',
		image: '/assets/gallery/newcase.png',
		description: 'Advanced laser solutions for skin rejuvenation and scar reduction.',
		treatment: 'State-of-the-art laser technology for targeted treatment.',
		note: 'Visible improvement in skin texture and tone with minimal downtime.',
	},
];

const Cases = () => {
	const { t } = useI18n();
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const checkScrollButtons = () => {
		if (scrollContainerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
		}
	};

	const scrollToNext = () => {
		if (scrollContainerRef.current) {
			const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
			const gap = 24; // gap-6 = 1.5rem = 24px
			scrollContainerRef.current.scrollBy({
				left: cardWidth + gap,
				behavior: 'smooth',
			});
		}
	};

	const scrollToPrevious = () => {
		if (scrollContainerRef.current) {
			const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
			const gap = 24; // gap-6 = 1.5rem = 24px
			scrollContainerRef.current.scrollBy({
				left: -(cardWidth + gap),
				behavior: 'smooth',
			});
		}
	};

	useEffect(() => {
		checkScrollButtons();
		window.addEventListener('resize', checkScrollButtons);
		return () => window.removeEventListener('resize', checkScrollButtons);
	}, []);

	return (
		<div className="py-20">
			{/* Page Header */}
			<section className="relative bg-secondary py-16 overflow-hidden">
				{/* Background Video */}
				<video
					className="absolute inset-0 w-full h-full object-cover opacity-60"
					autoPlay
					loop
					muted
					playsInline
				>
					<source src={vedios} type="video/mp4" />
				</video>

				{/* Content Overlay */}
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif">
						{t('cases.title')}
					</h1>
					<p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
						{t('cases.subtitle')}
					</p>
				</div>
			</section>

			{/* Case Carousel */}
			<section className="py-16">
				<div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-8">
					<div className="relative overflow-hidden">
						{/* Navigation Arrows */}
						<button
							onClick={scrollToPrevious}
							disabled={!canScrollLeft}
							className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border border-border rounded-full p-2 shadow-lg transition-all duration-200 ${
								!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
							}`}
							aria-label="Previous case"
						>
							<ChevronLeft className="w-5 h-5" />
						</button>

						<button
							onClick={scrollToNext}
							disabled={!canScrollRight}
							className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border border-border rounded-full p-2 shadow-lg transition-all duration-200 ${
								!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
							}`}
							aria-label="Next case"
						>
							<ChevronRight className="w-5 h-5" />
						</button>

						<div
							ref={scrollContainerRef}
							className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 sm:pb-6 md:pb-8"
							onScroll={checkScrollButtons}
						>
							{CASES.map((c) => (
								<article
									key={c.id}
									className="snap-center min-w-[90%] sm:min-w-[520px] md:min-w-[400px] lg:min-w-[300px] bg-card border border-border rounded-xl overflow-hidden shrink-0"
								>
									<div className="h-56 bg-muted overflow-hidden flex items-center justify-center sm:h-64 md:h-72 lg:h-80">
										<img
											src={c.image}
											alt={c.title}
											className="max-w-full max-h-full object-contain"
											loading="lazy"
										/>
									</div>
									<div className="p-4 sm:p-6 md:p-8">
										<h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2">
											{c.title}
										</h3>
										<h4 className="text-sm font-medium text-card-foreground mb-2">
											{t('cases.caseDescription')}
										</h4>
										<p className="text-muted-foreground mb-4">{c.description}</p>
										<h4 className="text-sm font-medium text-card-foreground mb-2">
											{t('cases.treatmentUsed')}
										</h4>
										<p className="text-muted-foreground mb-4">{c.treatment}</p>
										<h4 className="text-sm font-medium text-card-foreground mb-2">
											{t('cases.doctorsNote')}
										</h4>
										<div className="bg-secondary rounded-lg p-4">
											<p className="text-secondary-foreground italic">"{c.note}"</p>
											<div className="mt-3 pt-3 border-t border-border">
												<p className="text-xs font-medium text-secondary-foreground">
													- Dr. M. Bhargavi, MBBS, MD, DVL
												</p>
											</div>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Disclaimer removed */}

			{/* Call to Action */}
			<section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground  font-serif mb-6">
						{t('cases.startJourney')}
					</h2>
					<p className="text-xl text-primary-foreground/90 mb-8">
						{t('cases.schedule')}
					</p>
					<button className="bg-background text-primary hover:bg-background/90 font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-lg">
						{t('cases.bookYourConsultation')}
					</button>
				</div>
			</section>
		</div>
	);
};

export default Cases;