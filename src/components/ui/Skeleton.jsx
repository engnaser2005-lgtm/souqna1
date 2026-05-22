const Skeleton = ({ className = '' }) => {
  return (
    <div className={`skeleton rounded-lg ${className}`} />
  )
}

export const ProductCardSkeleton = () => {
  return (
    <div className="card p-4 space-y-3">
      <Skeleton className="w-full h-48 rounded-xl" />
      <Skeleton className="w-3/4 h-6" />
      <Skeleton className="w-1/2 h-4" />
      <div className="flex items-center justify-between">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="w-24 h-10" />
      </div>
    </div>
  )
}

export const TextSkeleton = ({ width = 'w-full', height = 'h-4' }) => {
  return <Skeleton className={`${width} ${height}`} />
}

export default Skeleton
