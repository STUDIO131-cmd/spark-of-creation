const CardSkeleton = () => (
  <div className="card-dark p-5 animate-pulse">
    <div className="mb-4 rounded-lg aspect-[4/3] bg-muted" />
    <div className="h-8 bg-muted rounded w-3/4 mb-2" />
    <div className="h-4 bg-muted rounded w-1/2 mb-3" />
    <div className="space-y-2">
      <div className="h-3 bg-muted rounded w-full" />
      <div className="h-3 bg-muted rounded w-full" />
      <div className="h-3 bg-muted rounded w-5/6" />
    </div>
  </div>
);

export default CardSkeleton;
