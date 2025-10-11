'use client'

import { Row, Col, Statistic } from 'antd'
import { BookOpen, Clock, Award, TrendingUp } from 'lucide-react'
import Card from '@/components/ui/Card'

export default function StudentDashboard() {
  const stats = [
    {
      title: 'Enrolled Courses',
      value: 5,
      icon: <BookOpen className="w-6 h-6 text-primary-yellow" />,
    },
    {
      title: 'Hours Learned',
      value: 42,
      icon: <Clock className="w-6 h-6 text-primary-teal" />,
    },
    {
      title: 'Certificates',
      value: 2,
      icon: <Award className="w-6 h-6 text-primary-yellow" />,
    },
    {
      title: 'Progress',
      value: 68,
      suffix: '%',
      icon: <TrendingUp className="w-6 h-6 text-primary-teal" />,
    },
  ]

  return (
    <div className="space-y-6">
      <Row gutter={[16, 16]}>
        {stats.map((stat, index) => (
          <Col key={index} xs={24} sm={12} lg={6}>
            <Card hoverable>
              <div className="flex items-center justify-between">
                <div>
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                {stat.icon}
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card>
            <h3 className="text-xl font-bold mb-4">Recent Courses</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold">Mathematics Advanced</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Next session: Tomorrow at 10:00 AM
                    </p>
                  </div>
                  <div className="text-primary-teal font-semibold">75% Complete</div>
                </div>
              ))}
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card>
            <h3 className="text-xl font-bold mb-4">Upcoming Sessions</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 border border-primary-teal/30 rounded-lg">
                  <h4 className="font-semibold">Physics Class</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Today, 2:00 PM
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
