import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { Calendar, DollarSign, Users } from 'lucide-react'

const JobCard = ({ job }) => {
  const {
    title,
    deadline,
    category,
    min_price,
    max_price,
    description,
    _id,
    bid_count,
  } = job || {}

  return (
    <Link
      to={`/job/${_id}`}
      className="group w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              {format(new Date(deadline), 'P')}
            </span>
          </div>
          <span className="px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-full">
            {category}
          </span>
        </div>

        <h1 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
          {title}
        </h1>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {description.substring(0, 70)}...
        </p>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-700">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="font-medium">
                ${min_price} - ${max_price}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Users className="w-4 h-4 text-indigo-600" />
              <span className="font-medium">{bid_count} bids</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default JobCard