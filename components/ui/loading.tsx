import { Card, CardContent } from '@/components/ui/card'

interface LoadingProps {
  variant?: 'default' | 'cards' | 'list'
  cardCount?: number
  className?: string
}

export function Loading({
  variant = 'default',
  cardCount = 3,
  className = '',
}: LoadingProps) {
  const renderCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Array.from({ length: cardCount }).map((_, index) => (
        <Card key={`loading-card-${index + 1}`} className="text-center h-full">
          <CardContent className="pt-6">
            <div className="mb-4 mx-auto h-16 w-16 bg-gray-200 rounded-full dark:bg-gray-700" />
            <div className="h-6 w-2/3 bg-gray-200 rounded mx-auto mb-2 dark:bg-gray-700" />
            <div className="h-4 w-3/4 bg-gray-200 rounded mx-auto dark:bg-gray-700" />
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderList = () => (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={`loading-list-item-${index + 1}`} className="flex items-center space-x-4">
          <div className="h-12 w-12 bg-gray-200 rounded-full dark:bg-gray-700" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-1/4 bg-gray-200 rounded dark:bg-gray-700" />
            <div className="h-4 w-3/4 bg-gray-200 rounded dark:bg-gray-700" />
          </div>
        </div>
      ))}
    </div>
  )

  const renderDefault = () => (
    <>
      <div className="text-center mb-16">
        <div className="h-8 w-32 bg-gray-200 rounded mx-auto mb-4 dark:bg-gray-700" />
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto dark:bg-gray-700" />
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="h-4 w-full bg-gray-200 rounded dark:bg-gray-700" />
        <div className="h-4 w-5/6 bg-gray-200 rounded dark:bg-gray-700" />
        <div className="h-4 w-4/6 bg-gray-200 rounded dark:bg-gray-700" />
      </div>
    </>
  )

  return (
    <div className={`container mx-auto px-4 py-8 animate-pulse ${className}`}>
      <div className="h-12 w-48 bg-gray-200 rounded mb-8 dark:bg-gray-700" />
      <div className="max-w-6xl mx-auto">
        {variant === 'cards' && renderCards()}
        {variant === 'list' && renderList()}
        {variant === 'default' && renderDefault()}
      </div>
    </div>
  )
}